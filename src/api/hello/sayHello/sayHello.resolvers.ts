import { Greeting } from "src/types/graph";
const resolvers = {
  Query: {
    sayHello: (): Greeting => {
      return {
        error: true,
        text: "Good!"
      };
    }
  }
};

export default resolvers;
