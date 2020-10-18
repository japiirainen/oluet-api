/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "../../utils/context"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  FloatFieldUpdateOperationsInput: { // input type
    set?: number | null; // Float
  }
  IntFieldUpdateOperationsInput: { // input type
    set?: number | null; // Int
  }
  JuomaCreateInput: { // input type
    alaTyyppi?: string | null; // String
    alkoholiProsentti: number; // Float!
    alue: string; // String!
    energia100ML: number; // Float!
    hapotGL: number; // Float!
    hinta: number; // Float!
    huomautus?: string | null; // String
    litraHinta: number; // Float!
    luennehdinta: string; // String!
    nimi: string; // String!
    olutTyyppi?: string | null; // String
    pakkausTyyppi: string; // String!
    pulloKoko: string; // String!
    rypaleet?: string | null; // String
    sokeriGL: number; // Float!
    suljentaTyyppi: string; // String!
    tyyppi: string; // String!
    Valikoima: string; // String!
    valmistaja: string; // String!
    valmistusMaa: string; // String!
    vuosikerta: number; // Int!
  }
  JuomaUpdateInput: { // input type
    alaTyyppi?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    alkoholiProsentti?: NexusGenInputs['FloatFieldUpdateOperationsInput'] | null; // FloatFieldUpdateOperationsInput
    alue?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    energia100ML?: NexusGenInputs['FloatFieldUpdateOperationsInput'] | null; // FloatFieldUpdateOperationsInput
    hapotGL?: NexusGenInputs['FloatFieldUpdateOperationsInput'] | null; // FloatFieldUpdateOperationsInput
    hinta?: NexusGenInputs['FloatFieldUpdateOperationsInput'] | null; // FloatFieldUpdateOperationsInput
    huomautus?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    litraHinta?: NexusGenInputs['FloatFieldUpdateOperationsInput'] | null; // FloatFieldUpdateOperationsInput
    luennehdinta?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    nimi?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    olutTyyppi?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    pakkausTyyppi?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    pulloKoko?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    rypaleet?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    sokeriGL?: NexusGenInputs['FloatFieldUpdateOperationsInput'] | null; // FloatFieldUpdateOperationsInput
    suljentaTyyppi?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    tyyppi?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    Valikoima?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    valmistaja?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    valmistusMaa?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    vuosikerta?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
  }
  JuomaWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenRootTypes {
  Juoma: { // root type
    alaTyyppi?: string | null; // String
    alkoholiProsentti?: number | null; // Float
    alue?: string | null; // String
    energia100ML?: number | null; // Float
    hapotGL?: number | null; // Float
    hinta?: number | null; // Float
    huomautus?: string | null; // String
    id?: string | null; // ID
    litraHinta?: string | null; // String
    luennehdinta?: string | null; // String
    nimi?: string | null; // String
    olutTyyppi?: string | null; // String
    pakkausTyyppi?: string | null; // String
    pulloKoko?: number | null; // Float
    rypaleet?: string | null; // String
    sokeriGL?: number | null; // Float
    suljentaTyyppi?: string | null; // String
    tyyppi?: string | null; // String
    Valikoima?: string | null; // String
    valmistaja?: string | null; // String
    valmistusMaa?: string | null; // String
    vuosikerta?: number | null; // Int
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  FloatFieldUpdateOperationsInput: NexusGenInputs['FloatFieldUpdateOperationsInput'];
  IntFieldUpdateOperationsInput: NexusGenInputs['IntFieldUpdateOperationsInput'];
  JuomaCreateInput: NexusGenInputs['JuomaCreateInput'];
  JuomaUpdateInput: NexusGenInputs['JuomaUpdateInput'];
  JuomaWhereUniqueInput: NexusGenInputs['JuomaWhereUniqueInput'];
  NullableStringFieldUpdateOperationsInput: NexusGenInputs['NullableStringFieldUpdateOperationsInput'];
  StringFieldUpdateOperationsInput: NexusGenInputs['StringFieldUpdateOperationsInput'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
}

export interface NexusGenFieldTypes {
  Juoma: { // field return type
    alaTyyppi: string | null; // String
    alkoholiProsentti: number | null; // Float
    alue: string | null; // String
    energia100ML: number | null; // Float
    hapotGL: number | null; // Float
    hinta: number | null; // Float
    huomautus: string | null; // String
    id: string | null; // ID
    litraHinta: string | null; // String
    luennehdinta: string | null; // String
    nimi: string | null; // String
    olutTyyppi: string | null; // String
    pakkausTyyppi: string | null; // String
    pulloKoko: number | null; // Float
    rypaleet: string | null; // String
    sokeriGL: number | null; // Float
    suljentaTyyppi: string | null; // String
    tyyppi: string | null; // String
    Valikoima: string | null; // String
    valmistaja: string | null; // String
    valmistusMaa: string | null; // String
    vuosikerta: number | null; // Int
  }
  Mutation: { // field return type
    createOneJuoma: NexusGenRootTypes['Juoma']; // Juoma!
    updateOneJuoma: NexusGenRootTypes['Juoma'] | null; // Juoma
  }
  Query: { // field return type
    juoma: NexusGenRootTypes['Juoma'] | null; // Juoma
    juomas: NexusGenRootTypes['Juoma'][]; // [Juoma!]!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneJuoma: { // args
      data: NexusGenInputs['JuomaCreateInput']; // JuomaCreateInput!
    }
    updateOneJuoma: { // args
      data: NexusGenInputs['JuomaUpdateInput']; // JuomaUpdateInput!
      where: NexusGenInputs['JuomaWhereUniqueInput']; // JuomaWhereUniqueInput!
    }
  }
  Query: {
    juoma: { // args
      where: NexusGenInputs['JuomaWhereUniqueInput']; // JuomaWhereUniqueInput!
    }
    juomas: { // args
      after?: NexusGenInputs['JuomaWhereUniqueInput'] | null; // JuomaWhereUniqueInput
      before?: NexusGenInputs['JuomaWhereUniqueInput'] | null; // JuomaWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Juoma" | "Mutation" | "Query";

export type NexusGenInputNames = "FloatFieldUpdateOperationsInput" | "IntFieldUpdateOperationsInput" | "JuomaCreateInput" | "JuomaUpdateInput" | "JuomaWhereUniqueInput" | "NullableStringFieldUpdateOperationsInput" | "StringFieldUpdateOperationsInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}