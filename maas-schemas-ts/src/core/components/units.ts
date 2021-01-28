/*

undefined
MaaS common units that are used consistently within our own objects

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export const schemaId = 'http://maasglobal.com/core/components/units.json';

// Uuid
// Universally unique identifier, see https://en.wikipedia.org/wiki/Universally_unique_identifier
export type Uuid = t.Branded<string, UuidBrand>;
export type UuidC = t.BrandC<t.StringC, UuidBrand>;
export const Uuid: UuidC = t.brand(
  t.string,
  (x): x is t.Branded<string, UuidBrand> =>
    typeof x !== 'string' ||
    x.match(RegExp('^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$')) !== null,
  'Uuid',
);
export interface UuidBrand {
  readonly Uuid: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Uuid)).decodeSync(examplesUuid) // => examplesUuid */
export const examplesUuid: NonEmptyArray<Uuid> = ([
  '4828507e-683f-41bf-9d87-689808fbf958',
] as unknown) as NonEmptyArray<Uuid>;

// HostnameLabel
// single component of a hostname
export type HostnameLabel = t.Branded<string, HostnameLabelBrand>;
export type HostnameLabelC = t.BrandC<t.StringC, HostnameLabelBrand>;
export const HostnameLabel: HostnameLabelC = t.brand(
  t.string,
  (x): x is t.Branded<string, HostnameLabelBrand> =>
    (typeof x !== 'string' ||
      x.match(RegExp('^[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?$')) !== null) &&
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 63),
  'HostnameLabel',
);
export interface HostnameLabelBrand {
  readonly HostnameLabel: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(HostnameLabel)).decodeSync(examplesHostnameLabel) // => examplesHostnameLabel */
export const examplesHostnameLabel: NonEmptyArray<HostnameLabel> = ([
  'example',
  'com',
  'with-hyphen',
  'foo1',
  '0bar',
] as unknown) as NonEmptyArray<HostnameLabel>;

// Hostname
// list of 1 or more hostname labels separated by dot
export type Hostname = t.Branded<string, HostnameBrand>;
export type HostnameC = t.BrandC<t.StringC, HostnameBrand>;
export const Hostname: HostnameC = t.brand(
  t.string,
  (x): x is t.Branded<string, HostnameBrand> =>
    (typeof x !== 'string' ||
      x.match(
        RegExp(
          '^[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?(.[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?)*$',
        ),
      ) !== null) &&
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 253),
  'Hostname',
);
export interface HostnameBrand {
  readonly Hostname: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Hostname)).decodeSync(examplesHostname) // => examplesHostname */
export const examplesHostname: NonEmptyArray<Hostname> = ([
  'localhost',
  'example.com',
  'sub.example.com',
] as unknown) as NonEmptyArray<Hostname>;

// Url
// Uniform resource locator, see https://en.wikipedia.org/wiki/Uniform_Resource_Locator and https://mathiasbynens.be/demo/url-regex
export type Url = t.Branded<string, UrlBrand>;
export type UrlC = t.BrandC<t.StringC, UrlBrand>;
export const Url: UrlC = t.brand(
  t.string,
  (x): x is t.Branded<string, UrlBrand> =>
    typeof x !== 'string' ||
    x.match(RegExp('^(https?|ftp):\\/\\/[^\\s/$.?#].[^\\s]*$')) !== null,
  'Url',
);
export interface UrlBrand {
  readonly Url: unique symbol;
}

// Arn
// The purpose of this remains a mystery
export type Arn = t.Branded<string, ArnBrand>;
export type ArnC = t.BrandC<t.StringC, ArnBrand>;
export const Arn: ArnC = t.brand(
  t.string,
  (x): x is t.Branded<string, ArnBrand> =>
    (typeof x !== 'string' ||
      x.match(
        RegExp('^arn:aws:[a-z]+:[\\w\\-]*:\\d{12}:[ \\w\\-]+(\\/[\\w\\- \\/]+)*'),
      ) !== null) &&
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 256),
  'Arn',
);
export interface ArnBrand {
  readonly Arn: unique symbol;
}

// ObsoleteIdentityId
// The purpose of this remains a mystery
export type ObsoleteIdentityId = t.Branded<string, ObsoleteIdentityIdBrand>;
export type ObsoleteIdentityIdC = t.BrandC<t.StringC, ObsoleteIdentityIdBrand>;
export const ObsoleteIdentityId: ObsoleteIdentityIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, ObsoleteIdentityIdBrand> =>
    typeof x !== 'string' ||
    x.match(
      RegExp('^[aepus]{2}-[\\w]{4}-\\d:[a-f\\d]{8}(-[a-f\\d]{4}){3}-[a-f\\d]{12}$'),
    ) !== null,
  'ObsoleteIdentityId',
);
export interface ObsoleteIdentityIdBrand {
  readonly ObsoleteIdentityId: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(ObsoleteIdentityId)).decodeSync(examplesObsoleteIdentityId) // => examplesObsoleteIdentityId */
export const examplesObsoleteIdentityId: NonEmptyArray<ObsoleteIdentityId> = ([
  'eu-west-1:4828507e-683f-41bf-9d87-689808fbf958',
] as unknown) as NonEmptyArray<ObsoleteIdentityId>;

// IdentityId
// The purpose of this remains a mystery
export type IdentityId = t.Branded<ObsoleteIdentityId | Uuid, IdentityIdBrand>;
export type IdentityIdC = t.BrandC<
  t.UnionC<[typeof ObsoleteIdentityId, typeof Uuid]>,
  IdentityIdBrand
>;
export const IdentityId: IdentityIdC = t.brand(
  t.union([ObsoleteIdentityId, Uuid]),
  (x): x is t.Branded<ObsoleteIdentityId | Uuid, IdentityIdBrand> => true,
  'IdentityId',
);
export interface IdentityIdBrand {
  readonly IdentityId: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(IdentityId)).decodeSync(examplesIdentityId) // => examplesIdentityId */
export const examplesIdentityId: NonEmptyArray<IdentityId> = ([
  'eu-west-1:4828507e-683f-41bf-9d87-689808fbf958',
  '4828507e-683f-41bf-9d87-689808fbf958',
] as unknown) as NonEmptyArray<IdentityId>;

// Currency
// Accepted monetary unit in ISO 4127 format, see https://en.wikipedia.org/wiki/ISO_4217#cite_note-1
export type Currency = t.Branded<
  string & ('EUR' | 'GBP' | 'SGD' | 'USD' | 'JPY' | 'CHF'),
  CurrencyBrand
>;
export type CurrencyC = t.BrandC<
  t.IntersectionC<
    [
      t.StringC,
      t.UnionC<
        [
          t.LiteralC<'EUR'>,
          t.LiteralC<'GBP'>,
          t.LiteralC<'SGD'>,
          t.LiteralC<'USD'>,
          t.LiteralC<'JPY'>,
          t.LiteralC<'CHF'>,
        ]
      >,
    ]
  >,
  CurrencyBrand
>;
export const Currency: CurrencyC = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('EUR'),
      t.literal('GBP'),
      t.literal('SGD'),
      t.literal('USD'),
      t.literal('JPY'),
      t.literal('CHF'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string & ('EUR' | 'GBP' | 'SGD' | 'USD' | 'JPY' | 'CHF'),
    CurrencyBrand
  > => true,
  'Currency',
);
export interface CurrencyBrand {
  readonly Currency: unique symbol;
}

// CurrencyEUR
// The purpose of this remains a mystery
export type CurrencyEUR = t.Branded<Currency & 'EUR', CurrencyEURBrand>;
export type CurrencyEURC = t.BrandC<
  t.IntersectionC<[typeof Currency, t.LiteralC<'EUR'>]>,
  CurrencyEURBrand
>;
export const CurrencyEUR: CurrencyEURC = t.brand(
  t.intersection([Currency, t.literal('EUR')]),
  (x): x is t.Branded<Currency & 'EUR', CurrencyEURBrand> => true,
  'CurrencyEUR',
);
export interface CurrencyEURBrand {
  readonly CurrencyEUR: unique symbol;
}
/** require('io-ts-validator').validator(CurrencyEUR).decodeSync(defaultCurrencyEUR) // => defaultCurrencyEUR */
export const defaultCurrencyEUR: CurrencyEUR = ('EUR' as unknown) as CurrencyEUR;

// CurrencyGBP
// The purpose of this remains a mystery
export type CurrencyGBP = t.Branded<Currency & 'GBP', CurrencyGBPBrand>;
export type CurrencyGBPC = t.BrandC<
  t.IntersectionC<[typeof Currency, t.LiteralC<'GBP'>]>,
  CurrencyGBPBrand
>;
export const CurrencyGBP: CurrencyGBPC = t.brand(
  t.intersection([Currency, t.literal('GBP')]),
  (x): x is t.Branded<Currency & 'GBP', CurrencyGBPBrand> => true,
  'CurrencyGBP',
);
export interface CurrencyGBPBrand {
  readonly CurrencyGBP: unique symbol;
}
/** require('io-ts-validator').validator(CurrencyGBP).decodeSync(defaultCurrencyGBP) // => defaultCurrencyGBP */
export const defaultCurrencyGBP: CurrencyGBP = ('GBP' as unknown) as CurrencyGBP;

// CurrencySGD
// The purpose of this remains a mystery
export type CurrencySGD = t.Branded<Currency & 'SGD', CurrencySGDBrand>;
export type CurrencySGDC = t.BrandC<
  t.IntersectionC<[typeof Currency, t.LiteralC<'SGD'>]>,
  CurrencySGDBrand
>;
export const CurrencySGD: CurrencySGDC = t.brand(
  t.intersection([Currency, t.literal('SGD')]),
  (x): x is t.Branded<Currency & 'SGD', CurrencySGDBrand> => true,
  'CurrencySGD',
);
export interface CurrencySGDBrand {
  readonly CurrencySGD: unique symbol;
}
/** require('io-ts-validator').validator(CurrencySGD).decodeSync(defaultCurrencySGD) // => defaultCurrencySGD */
export const defaultCurrencySGD: CurrencySGD = ('SGD' as unknown) as CurrencySGD;

// CurrencyUSD
// The purpose of this remains a mystery
export type CurrencyUSD = t.Branded<Currency & 'USD', CurrencyUSDBrand>;
export type CurrencyUSDC = t.BrandC<
  t.IntersectionC<[typeof Currency, t.LiteralC<'USD'>]>,
  CurrencyUSDBrand
>;
export const CurrencyUSD: CurrencyUSDC = t.brand(
  t.intersection([Currency, t.literal('USD')]),
  (x): x is t.Branded<Currency & 'USD', CurrencyUSDBrand> => true,
  'CurrencyUSD',
);
export interface CurrencyUSDBrand {
  readonly CurrencyUSD: unique symbol;
}
/** require('io-ts-validator').validator(CurrencyUSD).decodeSync(defaultCurrencyUSD) // => defaultCurrencyUSD */
export const defaultCurrencyUSD: CurrencyUSD = ('USD' as unknown) as CurrencyUSD;

// CurrencyJPY
// The purpose of this remains a mystery
export type CurrencyJPY = t.Branded<Currency & 'JPY', CurrencyJPYBrand>;
export type CurrencyJPYC = t.BrandC<
  t.IntersectionC<[typeof Currency, t.LiteralC<'JPY'>]>,
  CurrencyJPYBrand
>;
export const CurrencyJPY: CurrencyJPYC = t.brand(
  t.intersection([Currency, t.literal('JPY')]),
  (x): x is t.Branded<Currency & 'JPY', CurrencyJPYBrand> => true,
  'CurrencyJPY',
);
export interface CurrencyJPYBrand {
  readonly CurrencyJPY: unique symbol;
}
/** require('io-ts-validator').validator(CurrencyJPY).decodeSync(defaultCurrencyJPY) // => defaultCurrencyJPY */
export const defaultCurrencyJPY: CurrencyJPY = ('JPY' as unknown) as CurrencyJPY;

// CurrencyCHF
// The purpose of this remains a mystery
export type CurrencyCHF = t.Branded<Currency & 'CHF', CurrencyCHFBrand>;
export type CurrencyCHFC = t.BrandC<
  t.IntersectionC<[typeof Currency, t.LiteralC<'CHF'>]>,
  CurrencyCHFBrand
>;
export const CurrencyCHF: CurrencyCHFC = t.brand(
  t.intersection([Currency, t.literal('CHF')]),
  (x): x is t.Branded<Currency & 'CHF', CurrencyCHFBrand> => true,
  'CurrencyCHF',
);
export interface CurrencyCHFBrand {
  readonly CurrencyCHF: unique symbol;
}
/** require('io-ts-validator').validator(CurrencyCHF).decodeSync(defaultCurrencyCHF) // => defaultCurrencyCHF */
export const defaultCurrencyCHF: CurrencyCHF = ('CHF' as unknown) as CurrencyCHF;

// Time
// POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time
export type Time = t.Branded<number, TimeBrand>;
export type TimeC = t.BrandC<t.NumberC, TimeBrand>;
export const Time: TimeC = t.brand(
  t.number,
  (x): x is t.Branded<number, TimeBrand> =>
    (typeof x !== 'number' || x >= 126230400000) &&
    (typeof x !== 'number' || x <= 9007199254740991) &&
    Number.isInteger(x),
  'Time',
);
export interface TimeBrand {
  readonly Time: unique symbol;
}

// Duration
// duration in milliseconds (negative values permitted), https://en.wikipedia.org/wiki/Unix_time
export type Duration = t.Branded<number, DurationBrand>;
export type DurationC = t.BrandC<t.NumberC, DurationBrand>;
export const Duration: DurationC = t.brand(
  t.number,
  (x): x is t.Branded<number, DurationBrand> =>
    (typeof x !== 'number' || x >= -9007199254740991) &&
    (typeof x !== 'number' || x <= 9007199254740991) &&
    Number.isInteger(x),
  'Duration',
);
export interface DurationBrand {
  readonly Duration: unique symbol;
}

// IsoDate
// A date in the form YYYY-MM-DD without a time component
export type IsoDate = t.Branded<string, IsoDateBrand>;
export type IsoDateC = t.BrandC<t.StringC, IsoDateBrand>;
export const IsoDate: IsoDateC = t.brand(
  t.string,
  (x): x is t.Branded<string, IsoDateBrand> =>
    typeof x !== 'string' || x.match(RegExp('^\\d{4}-\\d{2}-\\d{2}')) !== null,
  'IsoDate',
);
export interface IsoDateBrand {
  readonly IsoDate: unique symbol;
}

// Units
// The default export. More information at the top.
export type Units = t.Branded<unknown, UnitsBrand>;
export type UnitsC = t.BrandC<t.UnknownC, UnitsBrand>;
export const Units: UnitsC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, UnitsBrand> => true,
  'Units',
);
export interface UnitsBrand {
  readonly Units: unique symbol;
}

export default Units;

// Success
