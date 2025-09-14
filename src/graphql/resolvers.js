// import { products } from "../data/products.js";
import Product from "../models/product.model.js";

export const resolvers = {
  Query: {
    // products: () => products,
    products: async () => await Product.find({}),
    // product: (_, { id }) => products.find((product) => product.id === id),
    product: async (_, { id }) => await Product.findById(id),
  },

  Mutation: {
    createProduct: async (_, { title, category, price, inStock }) => {
      // const newProduct = {
      //   id: String(products.length + 1),
      //   title,
      //   category,
      //   price,
      //   inStock,
      // };

      // products.push(newProduct);

      const newProduct = await Product.create({
        title,
        category,
        price,
        inStock,
      });
      return newProduct;
    },

    deleteProduct: async (_, { id }) => {
      // const index = products.findIndex((product) => product.id === id);
      // if (index === -1) return false;
      // products.splice(index, 1);

      await Product.findByIdAndDelete(id);
      return true;
    },

    updateProduct: async (_, { id, ...updates }) => {
      // const index = products.findIndex((product) => product.id === id);
      // if (index === -1) return null;
      // let updatedProduct = {
      //   ...products[index],
      //   ...updates,
      // };
      // products[index] = updatedProduct;

      const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
        new: true,
      });

      return updatedProduct;
    },
  },
};
