import { SayHelloQueryArgs, SayHelloResponse } from "src/types/graph";
const resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
      return {
        error: true,
        text: `Hello ${args.name}`
      };
    }
  }
};

export default resolvers;
