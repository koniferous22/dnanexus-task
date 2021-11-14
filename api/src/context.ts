import { Connection } from "typeorm";

export type ContextT = {
  em: ReturnType<Connection['createEntityManager']>
};
