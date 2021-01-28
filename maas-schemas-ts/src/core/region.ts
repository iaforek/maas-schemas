/*

undefined
MaaS region schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Address_ from './components/address';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'http://maasglobal.com/core/region.json';

// Region
// The default export. More information at the top.
export type Region = t.Branded<
  ({
    id?: string;
    name?: string;
    countryCode?: Address_.Country;
    zipCode?: Address_.ZipCode;
    availability?: Record<string, unknown>;
  } & Record<string, unknown>) & {
    id: Defined;
    countryCode: Defined;
    zipCode: Defined;
  },
  RegionBrand
>;
export type RegionC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            id: t.StringC;
            name: t.StringC;
            countryCode: typeof Address_.Country;
            zipCode: typeof Address_.ZipCode;
            availability: t.RecordC<t.StringC, t.UnknownC>;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        id: typeof Defined;
        countryCode: typeof Defined;
        zipCode: typeof Defined;
      }>,
    ]
  >,
  RegionBrand
>;
export const Region: RegionC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        id: t.string,
        name: t.string,
        countryCode: Address_.Country,
        zipCode: Address_.ZipCode,
        availability: t.record(t.string, t.unknown),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      id: Defined,
      countryCode: Defined,
      zipCode: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      id?: string;
      name?: string;
      countryCode?: Address_.Country;
      zipCode?: Address_.ZipCode;
      availability?: Record<string, unknown>;
    } & Record<string, unknown>) & {
      id: Defined;
      countryCode: Defined;
      zipCode: Defined;
    },
    RegionBrand
  > => true,
  'Region',
);
export interface RegionBrand {
  readonly Region: unique symbol;
}

export default Region;

// Success
