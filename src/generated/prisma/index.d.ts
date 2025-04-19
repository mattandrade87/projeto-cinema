
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Filme
 * 
 */
export type Filme = $Result.DefaultSelection<Prisma.$FilmePayload>
/**
 * Model Critica
 * 
 */
export type Critica = $Result.DefaultSelection<Prisma.$CriticaPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Filmes
 * const filmes = await prisma.filme.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Filmes
   * const filmes = await prisma.filme.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.filme`: Exposes CRUD operations for the **Filme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filmes
    * const filmes = await prisma.filme.findMany()
    * ```
    */
  get filme(): Prisma.FilmeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.critica`: Exposes CRUD operations for the **Critica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Criticas
    * const criticas = await prisma.critica.findMany()
    * ```
    */
  get critica(): Prisma.CriticaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Filme: 'Filme',
    Critica: 'Critica',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "filme" | "critica" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Filme: {
        payload: Prisma.$FilmePayload<ExtArgs>
        fields: Prisma.FilmeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilmeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilmeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          findFirst: {
            args: Prisma.FilmeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilmeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          findMany: {
            args: Prisma.FilmeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          create: {
            args: Prisma.FilmeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          createMany: {
            args: Prisma.FilmeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilmeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          delete: {
            args: Prisma.FilmeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          update: {
            args: Prisma.FilmeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          deleteMany: {
            args: Prisma.FilmeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilmeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilmeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          upsert: {
            args: Prisma.FilmeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          aggregate: {
            args: Prisma.FilmeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilme>
          }
          groupBy: {
            args: Prisma.FilmeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilmeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilmeCountArgs<ExtArgs>
            result: $Utils.Optional<FilmeCountAggregateOutputType> | number
          }
        }
      }
      Critica: {
        payload: Prisma.$CriticaPayload<ExtArgs>
        fields: Prisma.CriticaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CriticaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CriticaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload>
          }
          findFirst: {
            args: Prisma.CriticaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CriticaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload>
          }
          findMany: {
            args: Prisma.CriticaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload>[]
          }
          create: {
            args: Prisma.CriticaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload>
          }
          createMany: {
            args: Prisma.CriticaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CriticaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload>[]
          }
          delete: {
            args: Prisma.CriticaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload>
          }
          update: {
            args: Prisma.CriticaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload>
          }
          deleteMany: {
            args: Prisma.CriticaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CriticaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CriticaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload>[]
          }
          upsert: {
            args: Prisma.CriticaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriticaPayload>
          }
          aggregate: {
            args: Prisma.CriticaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCritica>
          }
          groupBy: {
            args: Prisma.CriticaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CriticaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CriticaCountArgs<ExtArgs>
            result: $Utils.Optional<CriticaCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    filme?: FilmeOmit
    critica?: CriticaOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FilmeCountOutputType
   */

  export type FilmeCountOutputType = {
    criticas: number
  }

  export type FilmeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criticas?: boolean | FilmeCountOutputTypeCountCriticasArgs
  }

  // Custom InputTypes
  /**
   * FilmeCountOutputType without action
   */
  export type FilmeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmeCountOutputType
     */
    select?: FilmeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilmeCountOutputType without action
   */
  export type FilmeCountOutputTypeCountCriticasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CriticaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Filme
   */

  export type AggregateFilme = {
    _count: FilmeCountAggregateOutputType | null
    _avg: FilmeAvgAggregateOutputType | null
    _sum: FilmeSumAggregateOutputType | null
    _min: FilmeMinAggregateOutputType | null
    _max: FilmeMaxAggregateOutputType | null
  }

  export type FilmeAvgAggregateOutputType = {
    id: number | null
    ano: number | null
  }

  export type FilmeSumAggregateOutputType = {
    id: number | null
    ano: number | null
  }

  export type FilmeMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    ano: number | null
    capa: string | null
  }

  export type FilmeMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    ano: number | null
    capa: string | null
  }

  export type FilmeCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    ano: number
    capa: number
    _all: number
  }


  export type FilmeAvgAggregateInputType = {
    id?: true
    ano?: true
  }

  export type FilmeSumAggregateInputType = {
    id?: true
    ano?: true
  }

  export type FilmeMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    ano?: true
    capa?: true
  }

  export type FilmeMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    ano?: true
    capa?: true
  }

  export type FilmeCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    ano?: true
    capa?: true
    _all?: true
  }

  export type FilmeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filme to aggregate.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Filmes
    **/
    _count?: true | FilmeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmeMaxAggregateInputType
  }

  export type GetFilmeAggregateType<T extends FilmeAggregateArgs> = {
        [P in keyof T & keyof AggregateFilme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilme[P]>
      : GetScalarType<T[P], AggregateFilme[P]>
  }




  export type FilmeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilmeWhereInput
    orderBy?: FilmeOrderByWithAggregationInput | FilmeOrderByWithAggregationInput[]
    by: FilmeScalarFieldEnum[] | FilmeScalarFieldEnum
    having?: FilmeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmeCountAggregateInputType | true
    _avg?: FilmeAvgAggregateInputType
    _sum?: FilmeSumAggregateInputType
    _min?: FilmeMinAggregateInputType
    _max?: FilmeMaxAggregateInputType
  }

  export type FilmeGroupByOutputType = {
    id: number
    titulo: string
    descricao: string | null
    ano: number
    capa: string
    _count: FilmeCountAggregateOutputType | null
    _avg: FilmeAvgAggregateOutputType | null
    _sum: FilmeSumAggregateOutputType | null
    _min: FilmeMinAggregateOutputType | null
    _max: FilmeMaxAggregateOutputType | null
  }

  type GetFilmeGroupByPayload<T extends FilmeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilmeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmeGroupByOutputType[P]>
            : GetScalarType<T[P], FilmeGroupByOutputType[P]>
        }
      >
    >


  export type FilmeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ano?: boolean
    capa?: boolean
    criticas?: boolean | Filme$criticasArgs<ExtArgs>
    _count?: boolean | FilmeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ano?: boolean
    capa?: boolean
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ano?: boolean
    capa?: boolean
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ano?: boolean
    capa?: boolean
  }

  export type FilmeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "ano" | "capa", ExtArgs["result"]["filme"]>
  export type FilmeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criticas?: boolean | Filme$criticasArgs<ExtArgs>
    _count?: boolean | FilmeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FilmeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FilmeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilmePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Filme"
    objects: {
      criticas: Prisma.$CriticaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string | null
      ano: number
      capa: string
    }, ExtArgs["result"]["filme"]>
    composites: {}
  }

  type FilmeGetPayload<S extends boolean | null | undefined | FilmeDefaultArgs> = $Result.GetResult<Prisma.$FilmePayload, S>

  type FilmeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilmeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilmeCountAggregateInputType | true
    }

  export interface FilmeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Filme'], meta: { name: 'Filme' } }
    /**
     * Find zero or one Filme that matches the filter.
     * @param {FilmeFindUniqueArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilmeFindUniqueArgs>(args: SelectSubset<T, FilmeFindUniqueArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Filme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilmeFindUniqueOrThrowArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilmeFindUniqueOrThrowArgs>(args: SelectSubset<T, FilmeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindFirstArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilmeFindFirstArgs>(args?: SelectSubset<T, FilmeFindFirstArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindFirstOrThrowArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilmeFindFirstOrThrowArgs>(args?: SelectSubset<T, FilmeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filmes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filmes
     * const filmes = await prisma.filme.findMany()
     * 
     * // Get first 10 Filmes
     * const filmes = await prisma.filme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filmeWithIdOnly = await prisma.filme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilmeFindManyArgs>(args?: SelectSubset<T, FilmeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Filme.
     * @param {FilmeCreateArgs} args - Arguments to create a Filme.
     * @example
     * // Create one Filme
     * const Filme = await prisma.filme.create({
     *   data: {
     *     // ... data to create a Filme
     *   }
     * })
     * 
     */
    create<T extends FilmeCreateArgs>(args: SelectSubset<T, FilmeCreateArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Filmes.
     * @param {FilmeCreateManyArgs} args - Arguments to create many Filmes.
     * @example
     * // Create many Filmes
     * const filme = await prisma.filme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilmeCreateManyArgs>(args?: SelectSubset<T, FilmeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Filmes and returns the data saved in the database.
     * @param {FilmeCreateManyAndReturnArgs} args - Arguments to create many Filmes.
     * @example
     * // Create many Filmes
     * const filme = await prisma.filme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Filmes and only return the `id`
     * const filmeWithIdOnly = await prisma.filme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilmeCreateManyAndReturnArgs>(args?: SelectSubset<T, FilmeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Filme.
     * @param {FilmeDeleteArgs} args - Arguments to delete one Filme.
     * @example
     * // Delete one Filme
     * const Filme = await prisma.filme.delete({
     *   where: {
     *     // ... filter to delete one Filme
     *   }
     * })
     * 
     */
    delete<T extends FilmeDeleteArgs>(args: SelectSubset<T, FilmeDeleteArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Filme.
     * @param {FilmeUpdateArgs} args - Arguments to update one Filme.
     * @example
     * // Update one Filme
     * const filme = await prisma.filme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilmeUpdateArgs>(args: SelectSubset<T, FilmeUpdateArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Filmes.
     * @param {FilmeDeleteManyArgs} args - Arguments to filter Filmes to delete.
     * @example
     * // Delete a few Filmes
     * const { count } = await prisma.filme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilmeDeleteManyArgs>(args?: SelectSubset<T, FilmeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filmes
     * const filme = await prisma.filme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilmeUpdateManyArgs>(args: SelectSubset<T, FilmeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filmes and returns the data updated in the database.
     * @param {FilmeUpdateManyAndReturnArgs} args - Arguments to update many Filmes.
     * @example
     * // Update many Filmes
     * const filme = await prisma.filme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Filmes and only return the `id`
     * const filmeWithIdOnly = await prisma.filme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilmeUpdateManyAndReturnArgs>(args: SelectSubset<T, FilmeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Filme.
     * @param {FilmeUpsertArgs} args - Arguments to update or create a Filme.
     * @example
     * // Update or create a Filme
     * const filme = await prisma.filme.upsert({
     *   create: {
     *     // ... data to create a Filme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Filme we want to update
     *   }
     * })
     */
    upsert<T extends FilmeUpsertArgs>(args: SelectSubset<T, FilmeUpsertArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Filmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeCountArgs} args - Arguments to filter Filmes to count.
     * @example
     * // Count the number of Filmes
     * const count = await prisma.filme.count({
     *   where: {
     *     // ... the filter for the Filmes we want to count
     *   }
     * })
    **/
    count<T extends FilmeCountArgs>(
      args?: Subset<T, FilmeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Filme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilmeAggregateArgs>(args: Subset<T, FilmeAggregateArgs>): Prisma.PrismaPromise<GetFilmeAggregateType<T>>

    /**
     * Group by Filme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilmeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilmeGroupByArgs['orderBy'] }
        : { orderBy?: FilmeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilmeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Filme model
   */
  readonly fields: FilmeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Filme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilmeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criticas<T extends Filme$criticasArgs<ExtArgs> = {}>(args?: Subset<T, Filme$criticasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Filme model
   */
  interface FilmeFieldRefs {
    readonly id: FieldRef<"Filme", 'Int'>
    readonly titulo: FieldRef<"Filme", 'String'>
    readonly descricao: FieldRef<"Filme", 'String'>
    readonly ano: FieldRef<"Filme", 'Int'>
    readonly capa: FieldRef<"Filme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Filme findUnique
   */
  export type FilmeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme findUniqueOrThrow
   */
  export type FilmeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme findFirst
   */
  export type FilmeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filmes.
     */
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme findFirstOrThrow
   */
  export type FilmeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filmes.
     */
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme findMany
   */
  export type FilmeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filmes to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme create
   */
  export type FilmeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The data needed to create a Filme.
     */
    data: XOR<FilmeCreateInput, FilmeUncheckedCreateInput>
  }

  /**
   * Filme createMany
   */
  export type FilmeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Filmes.
     */
    data: FilmeCreateManyInput | FilmeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Filme createManyAndReturn
   */
  export type FilmeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * The data used to create many Filmes.
     */
    data: FilmeCreateManyInput | FilmeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Filme update
   */
  export type FilmeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The data needed to update a Filme.
     */
    data: XOR<FilmeUpdateInput, FilmeUncheckedUpdateInput>
    /**
     * Choose, which Filme to update.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme updateMany
   */
  export type FilmeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Filmes.
     */
    data: XOR<FilmeUpdateManyMutationInput, FilmeUncheckedUpdateManyInput>
    /**
     * Filter which Filmes to update
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to update.
     */
    limit?: number
  }

  /**
   * Filme updateManyAndReturn
   */
  export type FilmeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * The data used to update Filmes.
     */
    data: XOR<FilmeUpdateManyMutationInput, FilmeUncheckedUpdateManyInput>
    /**
     * Filter which Filmes to update
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to update.
     */
    limit?: number
  }

  /**
   * Filme upsert
   */
  export type FilmeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The filter to search for the Filme to update in case it exists.
     */
    where: FilmeWhereUniqueInput
    /**
     * In case the Filme found by the `where` argument doesn't exist, create a new Filme with this data.
     */
    create: XOR<FilmeCreateInput, FilmeUncheckedCreateInput>
    /**
     * In case the Filme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilmeUpdateInput, FilmeUncheckedUpdateInput>
  }

  /**
   * Filme delete
   */
  export type FilmeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter which Filme to delete.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme deleteMany
   */
  export type FilmeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filmes to delete
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to delete.
     */
    limit?: number
  }

  /**
   * Filme.criticas
   */
  export type Filme$criticasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
    where?: CriticaWhereInput
    orderBy?: CriticaOrderByWithRelationInput | CriticaOrderByWithRelationInput[]
    cursor?: CriticaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CriticaScalarFieldEnum | CriticaScalarFieldEnum[]
  }

  /**
   * Filme without action
   */
  export type FilmeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
  }


  /**
   * Model Critica
   */

  export type AggregateCritica = {
    _count: CriticaCountAggregateOutputType | null
    _avg: CriticaAvgAggregateOutputType | null
    _sum: CriticaSumAggregateOutputType | null
    _min: CriticaMinAggregateOutputType | null
    _max: CriticaMaxAggregateOutputType | null
  }

  export type CriticaAvgAggregateOutputType = {
    id: number | null
    nota: number | null
    filmeId: number | null
  }

  export type CriticaSumAggregateOutputType = {
    id: number | null
    nota: number | null
    filmeId: number | null
  }

  export type CriticaMinAggregateOutputType = {
    id: number | null
    nota: number | null
    conteudo: string | null
    filmeId: number | null
  }

  export type CriticaMaxAggregateOutputType = {
    id: number | null
    nota: number | null
    conteudo: string | null
    filmeId: number | null
  }

  export type CriticaCountAggregateOutputType = {
    id: number
    nota: number
    conteudo: number
    filmeId: number
    _all: number
  }


  export type CriticaAvgAggregateInputType = {
    id?: true
    nota?: true
    filmeId?: true
  }

  export type CriticaSumAggregateInputType = {
    id?: true
    nota?: true
    filmeId?: true
  }

  export type CriticaMinAggregateInputType = {
    id?: true
    nota?: true
    conteudo?: true
    filmeId?: true
  }

  export type CriticaMaxAggregateInputType = {
    id?: true
    nota?: true
    conteudo?: true
    filmeId?: true
  }

  export type CriticaCountAggregateInputType = {
    id?: true
    nota?: true
    conteudo?: true
    filmeId?: true
    _all?: true
  }

  export type CriticaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Critica to aggregate.
     */
    where?: CriticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criticas to fetch.
     */
    orderBy?: CriticaOrderByWithRelationInput | CriticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CriticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Criticas
    **/
    _count?: true | CriticaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CriticaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CriticaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CriticaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CriticaMaxAggregateInputType
  }

  export type GetCriticaAggregateType<T extends CriticaAggregateArgs> = {
        [P in keyof T & keyof AggregateCritica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCritica[P]>
      : GetScalarType<T[P], AggregateCritica[P]>
  }




  export type CriticaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CriticaWhereInput
    orderBy?: CriticaOrderByWithAggregationInput | CriticaOrderByWithAggregationInput[]
    by: CriticaScalarFieldEnum[] | CriticaScalarFieldEnum
    having?: CriticaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CriticaCountAggregateInputType | true
    _avg?: CriticaAvgAggregateInputType
    _sum?: CriticaSumAggregateInputType
    _min?: CriticaMinAggregateInputType
    _max?: CriticaMaxAggregateInputType
  }

  export type CriticaGroupByOutputType = {
    id: number
    nota: number
    conteudo: string
    filmeId: number
    _count: CriticaCountAggregateOutputType | null
    _avg: CriticaAvgAggregateOutputType | null
    _sum: CriticaSumAggregateOutputType | null
    _min: CriticaMinAggregateOutputType | null
    _max: CriticaMaxAggregateOutputType | null
  }

  type GetCriticaGroupByPayload<T extends CriticaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CriticaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CriticaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CriticaGroupByOutputType[P]>
            : GetScalarType<T[P], CriticaGroupByOutputType[P]>
        }
      >
    >


  export type CriticaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    conteudo?: boolean
    filmeId?: boolean
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["critica"]>

  export type CriticaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    conteudo?: boolean
    filmeId?: boolean
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["critica"]>

  export type CriticaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nota?: boolean
    conteudo?: boolean
    filmeId?: boolean
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["critica"]>

  export type CriticaSelectScalar = {
    id?: boolean
    nota?: boolean
    conteudo?: boolean
    filmeId?: boolean
  }

  export type CriticaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nota" | "conteudo" | "filmeId", ExtArgs["result"]["critica"]>
  export type CriticaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }
  export type CriticaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }
  export type CriticaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }

  export type $CriticaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Critica"
    objects: {
      filme: Prisma.$FilmePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nota: number
      conteudo: string
      filmeId: number
    }, ExtArgs["result"]["critica"]>
    composites: {}
  }

  type CriticaGetPayload<S extends boolean | null | undefined | CriticaDefaultArgs> = $Result.GetResult<Prisma.$CriticaPayload, S>

  type CriticaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CriticaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CriticaCountAggregateInputType | true
    }

  export interface CriticaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Critica'], meta: { name: 'Critica' } }
    /**
     * Find zero or one Critica that matches the filter.
     * @param {CriticaFindUniqueArgs} args - Arguments to find a Critica
     * @example
     * // Get one Critica
     * const critica = await prisma.critica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CriticaFindUniqueArgs>(args: SelectSubset<T, CriticaFindUniqueArgs<ExtArgs>>): Prisma__CriticaClient<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Critica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CriticaFindUniqueOrThrowArgs} args - Arguments to find a Critica
     * @example
     * // Get one Critica
     * const critica = await prisma.critica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CriticaFindUniqueOrThrowArgs>(args: SelectSubset<T, CriticaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CriticaClient<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Critica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriticaFindFirstArgs} args - Arguments to find a Critica
     * @example
     * // Get one Critica
     * const critica = await prisma.critica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CriticaFindFirstArgs>(args?: SelectSubset<T, CriticaFindFirstArgs<ExtArgs>>): Prisma__CriticaClient<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Critica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriticaFindFirstOrThrowArgs} args - Arguments to find a Critica
     * @example
     * // Get one Critica
     * const critica = await prisma.critica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CriticaFindFirstOrThrowArgs>(args?: SelectSubset<T, CriticaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CriticaClient<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Criticas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriticaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Criticas
     * const criticas = await prisma.critica.findMany()
     * 
     * // Get first 10 Criticas
     * const criticas = await prisma.critica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const criticaWithIdOnly = await prisma.critica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CriticaFindManyArgs>(args?: SelectSubset<T, CriticaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Critica.
     * @param {CriticaCreateArgs} args - Arguments to create a Critica.
     * @example
     * // Create one Critica
     * const Critica = await prisma.critica.create({
     *   data: {
     *     // ... data to create a Critica
     *   }
     * })
     * 
     */
    create<T extends CriticaCreateArgs>(args: SelectSubset<T, CriticaCreateArgs<ExtArgs>>): Prisma__CriticaClient<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Criticas.
     * @param {CriticaCreateManyArgs} args - Arguments to create many Criticas.
     * @example
     * // Create many Criticas
     * const critica = await prisma.critica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CriticaCreateManyArgs>(args?: SelectSubset<T, CriticaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Criticas and returns the data saved in the database.
     * @param {CriticaCreateManyAndReturnArgs} args - Arguments to create many Criticas.
     * @example
     * // Create many Criticas
     * const critica = await prisma.critica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Criticas and only return the `id`
     * const criticaWithIdOnly = await prisma.critica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CriticaCreateManyAndReturnArgs>(args?: SelectSubset<T, CriticaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Critica.
     * @param {CriticaDeleteArgs} args - Arguments to delete one Critica.
     * @example
     * // Delete one Critica
     * const Critica = await prisma.critica.delete({
     *   where: {
     *     // ... filter to delete one Critica
     *   }
     * })
     * 
     */
    delete<T extends CriticaDeleteArgs>(args: SelectSubset<T, CriticaDeleteArgs<ExtArgs>>): Prisma__CriticaClient<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Critica.
     * @param {CriticaUpdateArgs} args - Arguments to update one Critica.
     * @example
     * // Update one Critica
     * const critica = await prisma.critica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CriticaUpdateArgs>(args: SelectSubset<T, CriticaUpdateArgs<ExtArgs>>): Prisma__CriticaClient<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Criticas.
     * @param {CriticaDeleteManyArgs} args - Arguments to filter Criticas to delete.
     * @example
     * // Delete a few Criticas
     * const { count } = await prisma.critica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CriticaDeleteManyArgs>(args?: SelectSubset<T, CriticaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criticas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriticaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Criticas
     * const critica = await prisma.critica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CriticaUpdateManyArgs>(args: SelectSubset<T, CriticaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criticas and returns the data updated in the database.
     * @param {CriticaUpdateManyAndReturnArgs} args - Arguments to update many Criticas.
     * @example
     * // Update many Criticas
     * const critica = await prisma.critica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Criticas and only return the `id`
     * const criticaWithIdOnly = await prisma.critica.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CriticaUpdateManyAndReturnArgs>(args: SelectSubset<T, CriticaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Critica.
     * @param {CriticaUpsertArgs} args - Arguments to update or create a Critica.
     * @example
     * // Update or create a Critica
     * const critica = await prisma.critica.upsert({
     *   create: {
     *     // ... data to create a Critica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Critica we want to update
     *   }
     * })
     */
    upsert<T extends CriticaUpsertArgs>(args: SelectSubset<T, CriticaUpsertArgs<ExtArgs>>): Prisma__CriticaClient<$Result.GetResult<Prisma.$CriticaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Criticas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriticaCountArgs} args - Arguments to filter Criticas to count.
     * @example
     * // Count the number of Criticas
     * const count = await prisma.critica.count({
     *   where: {
     *     // ... the filter for the Criticas we want to count
     *   }
     * })
    **/
    count<T extends CriticaCountArgs>(
      args?: Subset<T, CriticaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CriticaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Critica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriticaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CriticaAggregateArgs>(args: Subset<T, CriticaAggregateArgs>): Prisma.PrismaPromise<GetCriticaAggregateType<T>>

    /**
     * Group by Critica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriticaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CriticaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CriticaGroupByArgs['orderBy'] }
        : { orderBy?: CriticaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CriticaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCriticaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Critica model
   */
  readonly fields: CriticaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Critica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CriticaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filme<T extends FilmeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilmeDefaultArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Critica model
   */
  interface CriticaFieldRefs {
    readonly id: FieldRef<"Critica", 'Int'>
    readonly nota: FieldRef<"Critica", 'Int'>
    readonly conteudo: FieldRef<"Critica", 'String'>
    readonly filmeId: FieldRef<"Critica", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Critica findUnique
   */
  export type CriticaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
    /**
     * Filter, which Critica to fetch.
     */
    where: CriticaWhereUniqueInput
  }

  /**
   * Critica findUniqueOrThrow
   */
  export type CriticaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
    /**
     * Filter, which Critica to fetch.
     */
    where: CriticaWhereUniqueInput
  }

  /**
   * Critica findFirst
   */
  export type CriticaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
    /**
     * Filter, which Critica to fetch.
     */
    where?: CriticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criticas to fetch.
     */
    orderBy?: CriticaOrderByWithRelationInput | CriticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Criticas.
     */
    cursor?: CriticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Criticas.
     */
    distinct?: CriticaScalarFieldEnum | CriticaScalarFieldEnum[]
  }

  /**
   * Critica findFirstOrThrow
   */
  export type CriticaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
    /**
     * Filter, which Critica to fetch.
     */
    where?: CriticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criticas to fetch.
     */
    orderBy?: CriticaOrderByWithRelationInput | CriticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Criticas.
     */
    cursor?: CriticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Criticas.
     */
    distinct?: CriticaScalarFieldEnum | CriticaScalarFieldEnum[]
  }

  /**
   * Critica findMany
   */
  export type CriticaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
    /**
     * Filter, which Criticas to fetch.
     */
    where?: CriticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criticas to fetch.
     */
    orderBy?: CriticaOrderByWithRelationInput | CriticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Criticas.
     */
    cursor?: CriticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criticas.
     */
    skip?: number
    distinct?: CriticaScalarFieldEnum | CriticaScalarFieldEnum[]
  }

  /**
   * Critica create
   */
  export type CriticaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
    /**
     * The data needed to create a Critica.
     */
    data: XOR<CriticaCreateInput, CriticaUncheckedCreateInput>
  }

  /**
   * Critica createMany
   */
  export type CriticaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Criticas.
     */
    data: CriticaCreateManyInput | CriticaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Critica createManyAndReturn
   */
  export type CriticaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * The data used to create many Criticas.
     */
    data: CriticaCreateManyInput | CriticaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Critica update
   */
  export type CriticaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
    /**
     * The data needed to update a Critica.
     */
    data: XOR<CriticaUpdateInput, CriticaUncheckedUpdateInput>
    /**
     * Choose, which Critica to update.
     */
    where: CriticaWhereUniqueInput
  }

  /**
   * Critica updateMany
   */
  export type CriticaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Criticas.
     */
    data: XOR<CriticaUpdateManyMutationInput, CriticaUncheckedUpdateManyInput>
    /**
     * Filter which Criticas to update
     */
    where?: CriticaWhereInput
    /**
     * Limit how many Criticas to update.
     */
    limit?: number
  }

  /**
   * Critica updateManyAndReturn
   */
  export type CriticaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * The data used to update Criticas.
     */
    data: XOR<CriticaUpdateManyMutationInput, CriticaUncheckedUpdateManyInput>
    /**
     * Filter which Criticas to update
     */
    where?: CriticaWhereInput
    /**
     * Limit how many Criticas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Critica upsert
   */
  export type CriticaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
    /**
     * The filter to search for the Critica to update in case it exists.
     */
    where: CriticaWhereUniqueInput
    /**
     * In case the Critica found by the `where` argument doesn't exist, create a new Critica with this data.
     */
    create: XOR<CriticaCreateInput, CriticaUncheckedCreateInput>
    /**
     * In case the Critica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CriticaUpdateInput, CriticaUncheckedUpdateInput>
  }

  /**
   * Critica delete
   */
  export type CriticaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
    /**
     * Filter which Critica to delete.
     */
    where: CriticaWhereUniqueInput
  }

  /**
   * Critica deleteMany
   */
  export type CriticaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Criticas to delete
     */
    where?: CriticaWhereInput
    /**
     * Limit how many Criticas to delete.
     */
    limit?: number
  }

  /**
   * Critica without action
   */
  export type CriticaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Critica
     */
    select?: CriticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Critica
     */
    omit?: CriticaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriticaInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nomeUsuario: string | null
    senhaUsuario: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nomeUsuario: string | null
    senhaUsuario: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nomeUsuario: number
    senhaUsuario: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nomeUsuario?: true
    senhaUsuario?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nomeUsuario?: true
    senhaUsuario?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nomeUsuario?: true
    senhaUsuario?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nomeUsuario: string
    senhaUsuario: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    senhaUsuario?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    senhaUsuario?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    senhaUsuario?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nomeUsuario?: boolean
    senhaUsuario?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeUsuario" | "senhaUsuario" | "email", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeUsuario: string
      senhaUsuario: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nomeUsuario: FieldRef<"User", 'String'>
    readonly senhaUsuario: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FilmeScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    ano: 'ano',
    capa: 'capa'
  };

  export type FilmeScalarFieldEnum = (typeof FilmeScalarFieldEnum)[keyof typeof FilmeScalarFieldEnum]


  export const CriticaScalarFieldEnum: {
    id: 'id',
    nota: 'nota',
    conteudo: 'conteudo',
    filmeId: 'filmeId'
  };

  export type CriticaScalarFieldEnum = (typeof CriticaScalarFieldEnum)[keyof typeof CriticaScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nomeUsuario: 'nomeUsuario',
    senhaUsuario: 'senhaUsuario',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FilmeWhereInput = {
    AND?: FilmeWhereInput | FilmeWhereInput[]
    OR?: FilmeWhereInput[]
    NOT?: FilmeWhereInput | FilmeWhereInput[]
    id?: IntFilter<"Filme"> | number
    titulo?: StringFilter<"Filme"> | string
    descricao?: StringNullableFilter<"Filme"> | string | null
    ano?: IntFilter<"Filme"> | number
    capa?: StringFilter<"Filme"> | string
    criticas?: CriticaListRelationFilter
  }

  export type FilmeOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ano?: SortOrder
    capa?: SortOrder
    criticas?: CriticaOrderByRelationAggregateInput
  }

  export type FilmeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FilmeWhereInput | FilmeWhereInput[]
    OR?: FilmeWhereInput[]
    NOT?: FilmeWhereInput | FilmeWhereInput[]
    titulo?: StringFilter<"Filme"> | string
    descricao?: StringNullableFilter<"Filme"> | string | null
    ano?: IntFilter<"Filme"> | number
    capa?: StringFilter<"Filme"> | string
    criticas?: CriticaListRelationFilter
  }, "id">

  export type FilmeOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ano?: SortOrder
    capa?: SortOrder
    _count?: FilmeCountOrderByAggregateInput
    _avg?: FilmeAvgOrderByAggregateInput
    _max?: FilmeMaxOrderByAggregateInput
    _min?: FilmeMinOrderByAggregateInput
    _sum?: FilmeSumOrderByAggregateInput
  }

  export type FilmeScalarWhereWithAggregatesInput = {
    AND?: FilmeScalarWhereWithAggregatesInput | FilmeScalarWhereWithAggregatesInput[]
    OR?: FilmeScalarWhereWithAggregatesInput[]
    NOT?: FilmeScalarWhereWithAggregatesInput | FilmeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Filme"> | number
    titulo?: StringWithAggregatesFilter<"Filme"> | string
    descricao?: StringNullableWithAggregatesFilter<"Filme"> | string | null
    ano?: IntWithAggregatesFilter<"Filme"> | number
    capa?: StringWithAggregatesFilter<"Filme"> | string
  }

  export type CriticaWhereInput = {
    AND?: CriticaWhereInput | CriticaWhereInput[]
    OR?: CriticaWhereInput[]
    NOT?: CriticaWhereInput | CriticaWhereInput[]
    id?: IntFilter<"Critica"> | number
    nota?: IntFilter<"Critica"> | number
    conteudo?: StringFilter<"Critica"> | string
    filmeId?: IntFilter<"Critica"> | number
    filme?: XOR<FilmeScalarRelationFilter, FilmeWhereInput>
  }

  export type CriticaOrderByWithRelationInput = {
    id?: SortOrder
    nota?: SortOrder
    conteudo?: SortOrder
    filmeId?: SortOrder
    filme?: FilmeOrderByWithRelationInput
  }

  export type CriticaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CriticaWhereInput | CriticaWhereInput[]
    OR?: CriticaWhereInput[]
    NOT?: CriticaWhereInput | CriticaWhereInput[]
    nota?: IntFilter<"Critica"> | number
    conteudo?: StringFilter<"Critica"> | string
    filmeId?: IntFilter<"Critica"> | number
    filme?: XOR<FilmeScalarRelationFilter, FilmeWhereInput>
  }, "id">

  export type CriticaOrderByWithAggregationInput = {
    id?: SortOrder
    nota?: SortOrder
    conteudo?: SortOrder
    filmeId?: SortOrder
    _count?: CriticaCountOrderByAggregateInput
    _avg?: CriticaAvgOrderByAggregateInput
    _max?: CriticaMaxOrderByAggregateInput
    _min?: CriticaMinOrderByAggregateInput
    _sum?: CriticaSumOrderByAggregateInput
  }

  export type CriticaScalarWhereWithAggregatesInput = {
    AND?: CriticaScalarWhereWithAggregatesInput | CriticaScalarWhereWithAggregatesInput[]
    OR?: CriticaScalarWhereWithAggregatesInput[]
    NOT?: CriticaScalarWhereWithAggregatesInput | CriticaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Critica"> | number
    nota?: IntWithAggregatesFilter<"Critica"> | number
    conteudo?: StringWithAggregatesFilter<"Critica"> | string
    filmeId?: IntWithAggregatesFilter<"Critica"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nomeUsuario?: StringFilter<"User"> | string
    senhaUsuario?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    senhaUsuario?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nomeUsuario?: StringFilter<"User"> | string
    senhaUsuario?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    senhaUsuario?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nomeUsuario?: StringWithAggregatesFilter<"User"> | string
    senhaUsuario?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type FilmeCreateInput = {
    titulo: string
    descricao?: string | null
    ano: number
    capa: string
    criticas?: CriticaCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao?: string | null
    ano: number
    capa: string
    criticas?: CriticaUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: IntFieldUpdateOperationsInput | number
    capa?: StringFieldUpdateOperationsInput | string
    criticas?: CriticaUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: IntFieldUpdateOperationsInput | number
    capa?: StringFieldUpdateOperationsInput | string
    criticas?: CriticaUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeCreateManyInput = {
    id?: number
    titulo: string
    descricao?: string | null
    ano: number
    capa: string
  }

  export type FilmeUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: IntFieldUpdateOperationsInput | number
    capa?: StringFieldUpdateOperationsInput | string
  }

  export type FilmeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: IntFieldUpdateOperationsInput | number
    capa?: StringFieldUpdateOperationsInput | string
  }

  export type CriticaCreateInput = {
    nota: number
    conteudo: string
    filme: FilmeCreateNestedOneWithoutCriticasInput
  }

  export type CriticaUncheckedCreateInput = {
    id?: number
    nota: number
    conteudo: string
    filmeId: number
  }

  export type CriticaUpdateInput = {
    nota?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    filme?: FilmeUpdateOneRequiredWithoutCriticasNestedInput
  }

  export type CriticaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    filmeId?: IntFieldUpdateOperationsInput | number
  }

  export type CriticaCreateManyInput = {
    id?: number
    nota: number
    conteudo: string
    filmeId: number
  }

  export type CriticaUpdateManyMutationInput = {
    nota?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
  }

  export type CriticaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    filmeId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    nomeUsuario: string
    senhaUsuario: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nomeUsuario: string
    senhaUsuario: string
    email: string
  }

  export type UserUpdateInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    senhaUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    senhaUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    nomeUsuario: string
    senhaUsuario: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    senhaUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    senhaUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CriticaListRelationFilter = {
    every?: CriticaWhereInput
    some?: CriticaWhereInput
    none?: CriticaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CriticaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilmeCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    ano?: SortOrder
    capa?: SortOrder
  }

  export type FilmeAvgOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
  }

  export type FilmeMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    ano?: SortOrder
    capa?: SortOrder
  }

  export type FilmeMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    ano?: SortOrder
    capa?: SortOrder
  }

  export type FilmeSumOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FilmeScalarRelationFilter = {
    is?: FilmeWhereInput
    isNot?: FilmeWhereInput
  }

  export type CriticaCountOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    conteudo?: SortOrder
    filmeId?: SortOrder
  }

  export type CriticaAvgOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    filmeId?: SortOrder
  }

  export type CriticaMaxOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    conteudo?: SortOrder
    filmeId?: SortOrder
  }

  export type CriticaMinOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    conteudo?: SortOrder
    filmeId?: SortOrder
  }

  export type CriticaSumOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    filmeId?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    senhaUsuario?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    senhaUsuario?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    senhaUsuario?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CriticaCreateNestedManyWithoutFilmeInput = {
    create?: XOR<CriticaCreateWithoutFilmeInput, CriticaUncheckedCreateWithoutFilmeInput> | CriticaCreateWithoutFilmeInput[] | CriticaUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: CriticaCreateOrConnectWithoutFilmeInput | CriticaCreateOrConnectWithoutFilmeInput[]
    createMany?: CriticaCreateManyFilmeInputEnvelope
    connect?: CriticaWhereUniqueInput | CriticaWhereUniqueInput[]
  }

  export type CriticaUncheckedCreateNestedManyWithoutFilmeInput = {
    create?: XOR<CriticaCreateWithoutFilmeInput, CriticaUncheckedCreateWithoutFilmeInput> | CriticaCreateWithoutFilmeInput[] | CriticaUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: CriticaCreateOrConnectWithoutFilmeInput | CriticaCreateOrConnectWithoutFilmeInput[]
    createMany?: CriticaCreateManyFilmeInputEnvelope
    connect?: CriticaWhereUniqueInput | CriticaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CriticaUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<CriticaCreateWithoutFilmeInput, CriticaUncheckedCreateWithoutFilmeInput> | CriticaCreateWithoutFilmeInput[] | CriticaUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: CriticaCreateOrConnectWithoutFilmeInput | CriticaCreateOrConnectWithoutFilmeInput[]
    upsert?: CriticaUpsertWithWhereUniqueWithoutFilmeInput | CriticaUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: CriticaCreateManyFilmeInputEnvelope
    set?: CriticaWhereUniqueInput | CriticaWhereUniqueInput[]
    disconnect?: CriticaWhereUniqueInput | CriticaWhereUniqueInput[]
    delete?: CriticaWhereUniqueInput | CriticaWhereUniqueInput[]
    connect?: CriticaWhereUniqueInput | CriticaWhereUniqueInput[]
    update?: CriticaUpdateWithWhereUniqueWithoutFilmeInput | CriticaUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: CriticaUpdateManyWithWhereWithoutFilmeInput | CriticaUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: CriticaScalarWhereInput | CriticaScalarWhereInput[]
  }

  export type CriticaUncheckedUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<CriticaCreateWithoutFilmeInput, CriticaUncheckedCreateWithoutFilmeInput> | CriticaCreateWithoutFilmeInput[] | CriticaUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: CriticaCreateOrConnectWithoutFilmeInput | CriticaCreateOrConnectWithoutFilmeInput[]
    upsert?: CriticaUpsertWithWhereUniqueWithoutFilmeInput | CriticaUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: CriticaCreateManyFilmeInputEnvelope
    set?: CriticaWhereUniqueInput | CriticaWhereUniqueInput[]
    disconnect?: CriticaWhereUniqueInput | CriticaWhereUniqueInput[]
    delete?: CriticaWhereUniqueInput | CriticaWhereUniqueInput[]
    connect?: CriticaWhereUniqueInput | CriticaWhereUniqueInput[]
    update?: CriticaUpdateWithWhereUniqueWithoutFilmeInput | CriticaUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: CriticaUpdateManyWithWhereWithoutFilmeInput | CriticaUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: CriticaScalarWhereInput | CriticaScalarWhereInput[]
  }

  export type FilmeCreateNestedOneWithoutCriticasInput = {
    create?: XOR<FilmeCreateWithoutCriticasInput, FilmeUncheckedCreateWithoutCriticasInput>
    connectOrCreate?: FilmeCreateOrConnectWithoutCriticasInput
    connect?: FilmeWhereUniqueInput
  }

  export type FilmeUpdateOneRequiredWithoutCriticasNestedInput = {
    create?: XOR<FilmeCreateWithoutCriticasInput, FilmeUncheckedCreateWithoutCriticasInput>
    connectOrCreate?: FilmeCreateOrConnectWithoutCriticasInput
    upsert?: FilmeUpsertWithoutCriticasInput
    connect?: FilmeWhereUniqueInput
    update?: XOR<XOR<FilmeUpdateToOneWithWhereWithoutCriticasInput, FilmeUpdateWithoutCriticasInput>, FilmeUncheckedUpdateWithoutCriticasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CriticaCreateWithoutFilmeInput = {
    nota: number
    conteudo: string
  }

  export type CriticaUncheckedCreateWithoutFilmeInput = {
    id?: number
    nota: number
    conteudo: string
  }

  export type CriticaCreateOrConnectWithoutFilmeInput = {
    where: CriticaWhereUniqueInput
    create: XOR<CriticaCreateWithoutFilmeInput, CriticaUncheckedCreateWithoutFilmeInput>
  }

  export type CriticaCreateManyFilmeInputEnvelope = {
    data: CriticaCreateManyFilmeInput | CriticaCreateManyFilmeInput[]
    skipDuplicates?: boolean
  }

  export type CriticaUpsertWithWhereUniqueWithoutFilmeInput = {
    where: CriticaWhereUniqueInput
    update: XOR<CriticaUpdateWithoutFilmeInput, CriticaUncheckedUpdateWithoutFilmeInput>
    create: XOR<CriticaCreateWithoutFilmeInput, CriticaUncheckedCreateWithoutFilmeInput>
  }

  export type CriticaUpdateWithWhereUniqueWithoutFilmeInput = {
    where: CriticaWhereUniqueInput
    data: XOR<CriticaUpdateWithoutFilmeInput, CriticaUncheckedUpdateWithoutFilmeInput>
  }

  export type CriticaUpdateManyWithWhereWithoutFilmeInput = {
    where: CriticaScalarWhereInput
    data: XOR<CriticaUpdateManyMutationInput, CriticaUncheckedUpdateManyWithoutFilmeInput>
  }

  export type CriticaScalarWhereInput = {
    AND?: CriticaScalarWhereInput | CriticaScalarWhereInput[]
    OR?: CriticaScalarWhereInput[]
    NOT?: CriticaScalarWhereInput | CriticaScalarWhereInput[]
    id?: IntFilter<"Critica"> | number
    nota?: IntFilter<"Critica"> | number
    conteudo?: StringFilter<"Critica"> | string
    filmeId?: IntFilter<"Critica"> | number
  }

  export type FilmeCreateWithoutCriticasInput = {
    titulo: string
    descricao?: string | null
    ano: number
    capa: string
  }

  export type FilmeUncheckedCreateWithoutCriticasInput = {
    id?: number
    titulo: string
    descricao?: string | null
    ano: number
    capa: string
  }

  export type FilmeCreateOrConnectWithoutCriticasInput = {
    where: FilmeWhereUniqueInput
    create: XOR<FilmeCreateWithoutCriticasInput, FilmeUncheckedCreateWithoutCriticasInput>
  }

  export type FilmeUpsertWithoutCriticasInput = {
    update: XOR<FilmeUpdateWithoutCriticasInput, FilmeUncheckedUpdateWithoutCriticasInput>
    create: XOR<FilmeCreateWithoutCriticasInput, FilmeUncheckedCreateWithoutCriticasInput>
    where?: FilmeWhereInput
  }

  export type FilmeUpdateToOneWithWhereWithoutCriticasInput = {
    where?: FilmeWhereInput
    data: XOR<FilmeUpdateWithoutCriticasInput, FilmeUncheckedUpdateWithoutCriticasInput>
  }

  export type FilmeUpdateWithoutCriticasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: IntFieldUpdateOperationsInput | number
    capa?: StringFieldUpdateOperationsInput | string
  }

  export type FilmeUncheckedUpdateWithoutCriticasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ano?: IntFieldUpdateOperationsInput | number
    capa?: StringFieldUpdateOperationsInput | string
  }

  export type CriticaCreateManyFilmeInput = {
    id?: number
    nota: number
    conteudo: string
  }

  export type CriticaUpdateWithoutFilmeInput = {
    nota?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
  }

  export type CriticaUncheckedUpdateWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
  }

  export type CriticaUncheckedUpdateManyWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nota?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}