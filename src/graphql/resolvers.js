import { products } from "../data/products.js";

export const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((product) => product.id === id),
  },

  Mutation: {
    createProduct: (_, { title, category, price, inStock }) => {
      const newProduct = {
        id: String(products.length + 1),
        title,
        category,
        price,
        inStock,
      };

      products.push(newProduct);
      return newProduct;
    },

    deleteProduct: (_, { id }) => {
      const index = products.findIndex((product) => product.id === id);
      if (index === -1) return false;
      products.splice(index, 1);
      return true;
    },

    updateProduct: (_, { id, ...updates }) => {
      const index = products.findIndex((product) => product.id === id);
      if (index === -1) return null;
      let updatedProduct = {
        ...products[index],
        ...updates,
      };
      products[index] = updatedProduct;
      return updatedProduct;
    },
  },
};
