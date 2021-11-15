import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { FindManyOptions } from "typeorm";
import { ContextT } from "./context";
import { Note } from "./entities/note";

const note = new GraphQLObjectType({
  name: 'Note',
  fields: {
    id: {
      type: GraphQLID
    },
    description: {
      type: GraphQLString
    }
  }
})

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      note: {
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID),
          }
        },
        type: note,
        resolve(_, args, context: ContextT) {
          return context.em.getRepository(Note).findOne(args.id)
        },
      },
      notes: {
        args: {
          page: {
            type: GraphQLInt,
            defaultValue: 1
          },
          perPage: {
            type: GraphQLInt,
            defaultValue: 20
          },
          sortField: {
            type: GraphQLString,
          }
        },
        type: new GraphQLList(note),
        resolve(_, args, context: ContextT) {
          const findOpts: FindManyOptions<Note> = {
            take: args.perPage,
            skip: args.perPage * (args.page - 1),
          }
          if (args.sortField) {
            findOpts.order = {
              [args.sortField]: 'DESC'
            }
          }
          return context.em.getRepository(Note).find(findOpts)
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      createNote: {
        type: note,
        args: {
          description: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        async resolve(_, args, context: ContextT) {
          if (!args.description) {
            throw new Error('Description was null')
          }
          const newNote = context.em.getRepository(Note).create();
          newNote.description = args.description;
          return context.em.save(newNote);
        },
      },
      deleteNote: {
        type: note,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID)
          }
        },
        async resolve(_, args, context: ContextT) {
          return context.em.getRepository(Note).delete({
            id: args.id
          });
        },
      }
    }
  })
});
