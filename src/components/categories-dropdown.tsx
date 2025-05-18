'use client';

import { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request';
import Link from 'next/link';
import type {
  ProductCategory,
  ProductCategoriesResponse,
} from '@/types/category';
import { Loader2 } from 'lucide-react';

const GET_PRODUCT_CATEGORIES = gql`
  query GetProductCategories {
    productCategories(first: 100) {
      nodes {
        id
        databaseId
        name
        slug
        description
        count
        image {
          sourceUrl
          altText
        }
        parentId
        children {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

export default function CategoriesDropdown() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await request<ProductCategoriesResponse>(
          process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '',
          GET_PRODUCT_CATEGORIES,
        );

        // Sort categories alphabetically
        const sortedCategories = [...data.productCategories.nodes].sort(
          (a, b) => a.name.localeCompare(b.name),
        );

        setCategories(sortedCategories);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="absolute top-full left-0 z-10 pt-2">
        <div className="min-w-[220px] bg-white px-6 py-4 shadow-sm">
          <div className="flex items-center justify-center py-4">
            <Loader2 className="h-5 w-5 animate-spin text-[#212121]" />
            <span className="ml-2 text-sm text-[#646161]">
              Loading categories...
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="absolute top-full left-0 z-10 pt-2">
        <div className="min-w-[220px] bg-white px-6 py-4 shadow-sm">
          <div className="py-2 text-sm text-red-500">
            Failed to load categories
          </div>
        </div>
      </div>
    );
  }

  // Filter out categories that might not be relevant for the bags dropdown
  // This is just an example - adjust based on your needs
  const bagCategories = categories.filter(
    (cat) =>
      ![
        'All Products',
        'New arrivals',
        'Sale',
        'In stock',
        'Pre-order (2 weeks)',
        'Exclusive',
      ].includes(cat.name),
  );

  return (
    <div className="absolute top-full left-0 z-10 pt-2">
      <div className="min-w-[220px] bg-white px-0 py-4 shadow-sm">
        <Link
          href="/bags"
          className="block px-6 py-1 text-[#212121] hover:text-[#575555]"
        >
          View all
        </Link>

        {bagCategories.map((category) => (
          <Link
            key={category.id}
            href={`/bags/${category.slug}`}
            className="block flex items-center justify-between px-6 py-1 text-[#212121] hover:text-[#575555]"
          >
            <span>{category.name}</span>
            {category.count !== null && (
              <span className="text-sm text-[#646161]">({category.count})</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
