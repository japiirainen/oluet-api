/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "../../utils/context"
import { core } from "@nexus/schema"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}
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
  DateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  JuomaCreateInput: { // input type
    alaTyyppi?: string | null; // String
    alkoholiProsentti?: string | null; // String
    alue?: string | null; // String
    date: NexusGenScalars['DateTime']; // DateTime!
    EAN?: string | null; // String
    energia100ML?: string | null; // String
    erityisryhma?: string | null; // String
    etikettimerkintoja?: string | null; // String
    hapotGL?: string | null; // String
    hinnastoJarjestysKoodi?: string | null; // String
    hinta?: number | null; // Float
    huomautus?: string | null; // String
    kantavierrep?: number | null; // Float
    katkerot?: string | null; // String
    litraHinta?: number | null; // Float
    luennehdinta?: string | null; // String
    nimi?: string | null; // String
    olutTyyppi?: string | null; // String
    pakkausTyyppi?: string | null; // String
    productId: string; // String!
    pulloKoko?: string | null; // String
    rypaleet?: string | null; // String
    sokeriGL?: number | null; // Int
    suljentaTyyppi?: string | null; // String
    tyyppi?: string | null; // String
    uutuus?: string | null; // String
    valikoima?: string | null; // String
    valmistaja?: string | null; // String
    valmistusMaa?: string | null; // String
    vari?: string | null; // String
    vuosikerta?: string | null; // String
  }
  JuomaUpdateInput: { // input type
    alaTyyppi?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    alkoholiProsentti?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    alue?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    date?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    EAN?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    energia100ML?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    erityisryhma?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    etikettimerkintoja?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    hapotGL?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    hinnastoJarjestysKoodi?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    hinta?: NexusGenInputs['NullableFloatFieldUpdateOperationsInput'] | null; // NullableFloatFieldUpdateOperationsInput
    huomautus?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    kantavierrep?: NexusGenInputs['NullableFloatFieldUpdateOperationsInput'] | null; // NullableFloatFieldUpdateOperationsInput
    katkerot?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    litraHinta?: NexusGenInputs['NullableFloatFieldUpdateOperationsInput'] | null; // NullableFloatFieldUpdateOperationsInput
    luennehdinta?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    nimi?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    olutTyyppi?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    pakkausTyyppi?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    productId?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    pulloKoko?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    rypaleet?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    sokeriGL?: NexusGenInputs['NullableIntFieldUpdateOperationsInput'] | null; // NullableIntFieldUpdateOperationsInput
    suljentaTyyppi?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    tyyppi?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    uutuus?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    valikoima?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    valmistaja?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    valmistusMaa?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    vari?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    vuosikerta?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
  }
  JuomaWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  NullableFloatFieldUpdateOperationsInput: { // input type
    set?: number | null; // Float
  }
  NullableIntFieldUpdateOperationsInput: { // input type
    set?: number | null; // Int
  }
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  PriceWhereUniqueInput: { // input type
    id?: number | null; // Int
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
  Date: Date
  DateTime: any
}

export interface NexusGenRootTypes {
  Juoma: { // root type
    alaTyyppi?: string | null; // String
    alkoholiProsentti?: string | null; // String
    alue?: string | null; // String
    date?: NexusGenScalars['Date'] | null; // Date
    EAN?: string | null; // String
    energia100ML?: string | null; // String
    erityisryhma?: string | null; // String
    etikettimerkintoja?: string | null; // String
    hapotGL?: string | null; // String
    hinnastoJarjestysKoodi?: string | null; // String
    hinta?: number | null; // Float
    huomautus?: string | null; // String
    id?: string | null; // ID
    kantavierrep?: number | null; // Float
    katkerot?: string | null; // String
    litraHinta?: number | null; // Float
    luonnehdinta?: string | null; // String
    nimi?: string | null; // String
    olutTyyppi?: string | null; // String
    pakkausTyyppi?: string | null; // String
    productId?: string | null; // String
    pulloKoko?: string | null; // String
    rypaleet?: string | null; // String
    sokeriGL?: number | null; // Int
    suljentaTyyppi?: string | null; // String
    tyyppi?: string | null; // String
    uutuus?: string | null; // String
    valikoima?: string | null; // String
    valmistaja?: string | null; // String
    valmistusMaa?: string | null; // String
    vari?: string | null; // String
    vuosikerta?: string | null; // String
  }
  Mutation: {};
  Price: { // root type
    date?: NexusGenScalars['Date'] | null; // Date
    hinta?: number | null; // Float
    id?: string | null; // ID
    productId?: string | null; // String
  }
  Query: {};
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  DateTimeFieldUpdateOperationsInput: NexusGenInputs['DateTimeFieldUpdateOperationsInput'];
  JuomaCreateInput: NexusGenInputs['JuomaCreateInput'];
  JuomaUpdateInput: NexusGenInputs['JuomaUpdateInput'];
  JuomaWhereUniqueInput: NexusGenInputs['JuomaWhereUniqueInput'];
  NullableFloatFieldUpdateOperationsInput: NexusGenInputs['NullableFloatFieldUpdateOperationsInput'];
  NullableIntFieldUpdateOperationsInput: NexusGenInputs['NullableIntFieldUpdateOperationsInput'];
  NullableStringFieldUpdateOperationsInput: NexusGenInputs['NullableStringFieldUpdateOperationsInput'];
  PriceWhereUniqueInput: NexusGenInputs['PriceWhereUniqueInput'];
  StringFieldUpdateOperationsInput: NexusGenInputs['StringFieldUpdateOperationsInput'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  Date: NexusGenScalars['Date'];
  DateTime: NexusGenScalars['DateTime'];
}

export interface NexusGenFieldTypes {
  Juoma: { // field return type
    alaTyyppi: string | null; // String
    alkoholiProsentti: string | null; // String
    alue: string | null; // String
    date: NexusGenScalars['Date'] | null; // Date
    EAN: string | null; // String
    energia100ML: string | null; // String
    erityisryhma: string | null; // String
    etikettimerkintoja: string | null; // String
    hapotGL: string | null; // String
    hinnastoJarjestysKoodi: string | null; // String
    hinta: number | null; // Float
    huomautus: string | null; // String
    id: string | null; // ID
    kantavierrep: number | null; // Float
    katkerot: string | null; // String
    litraHinta: number | null; // Float
    luonnehdinta: string | null; // String
    nimi: string | null; // String
    olutTyyppi: string | null; // String
    pakkausTyyppi: string | null; // String
    productId: string | null; // String
    pulloKoko: string | null; // String
    rypaleet: string | null; // String
    sokeriGL: number | null; // Int
    suljentaTyyppi: string | null; // String
    tyyppi: string | null; // String
    uutuus: string | null; // String
    valikoima: string | null; // String
    valmistaja: string | null; // String
    valmistusMaa: string | null; // String
    vari: string | null; // String
    vuosikerta: string | null; // String
  }
  Mutation: { // field return type
    createOneJuoma: NexusGenRootTypes['Juoma']; // Juoma!
    saveAllDrinks: NexusGenRootTypes['Juoma'] | null; // Juoma
    updateOneJuoma: NexusGenRootTypes['Juoma'] | null; // Juoma
  }
  Price: { // field return type
    date: NexusGenScalars['Date'] | null; // Date
    hinta: number | null; // Float
    id: string | null; // ID
    productId: string | null; // String
  }
  Query: { // field return type
    etsiTyypilla: Array<NexusGenRootTypes['Juoma'] | null> | null; // [Juoma]
    hinnat: NexusGenRootTypes['Price'][]; // [Price!]!
    hinta: NexusGenRootTypes['Price'] | null; // Price
    juoma: NexusGenRootTypes['Juoma'] | null; // Juoma
    juomat: NexusGenRootTypes['Juoma'][]; // [Juoma!]!
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
    etsiTyypilla: { // args
      tyyppi: string; // String!
    }
    hinnat: { // args
      after?: NexusGenInputs['PriceWhereUniqueInput'] | null; // PriceWhereUniqueInput
      before?: NexusGenInputs['PriceWhereUniqueInput'] | null; // PriceWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    hinta: { // args
      where: NexusGenInputs['PriceWhereUniqueInput']; // PriceWhereUniqueInput!
    }
    juoma: { // args
      where: NexusGenInputs['JuomaWhereUniqueInput']; // JuomaWhereUniqueInput!
    }
    juomat: { // args
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

export type NexusGenObjectNames = "Juoma" | "Mutation" | "Price" | "Query";

export type NexusGenInputNames = "DateTimeFieldUpdateOperationsInput" | "JuomaCreateInput" | "JuomaUpdateInput" | "JuomaWhereUniqueInput" | "NullableFloatFieldUpdateOperationsInput" | "NullableIntFieldUpdateOperationsInput" | "NullableStringFieldUpdateOperationsInput" | "PriceWhereUniqueInput" | "StringFieldUpdateOperationsInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Date" | "DateTime" | "Float" | "ID" | "Int" | "String";

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