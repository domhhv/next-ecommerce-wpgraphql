export interface CategoryImage {
  sourceUrl: string | null;
  altText: string | null;
}

export interface CategoryChild {
  id: string;
  name: string;
  slug: string;
}

export interface ProductCategory {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  description: string | null;
  count: number | null;
  image: CategoryImage | null;
  parentId: string | null;
  children: {
    nodes: CategoryChild[];
  };
}

export interface ProductCategoriesResponse {
  productCategories: {
    nodes: ProductCategory[];
  };
}
