/*

undefined
OpenTripPlanner compatible format for plans, extended with id for legs and itineraries

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Place_ from 'maas-schemas-ts/core/components/place';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Itinerary_ from 'maas-schemas-ts/core/itinerary';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/core/plan.json';

// Itineraries
// The purpose of this remains a mystery
export type Itineraries = t.Branded<Array<Itinerary_.Itinerary>, ItinerariesBrand>;
export const Itineraries = t.brand(
  t.array(Itinerary_.Itinerary),
  (x): x is t.Branded<Array<Itinerary_.Itinerary>, ItinerariesBrand> => true,
  'Itineraries',
);
export interface ItinerariesBrand {
  readonly Itineraries: unique symbol;
}

// Plan1
// The purpose of this remains a mystery
export type Plan1 = t.Branded<
  {
    from?: Place_.Place;
    planId?: Units_.Uuid;
    outwards?: Itineraries;
    returns?: Itineraries;
  } & {
    from: Defined;
    planId: Defined;
    outwards: Defined;
    returns: Defined;
  },
  Plan1Brand
>;
export const Plan1 = t.brand(
  t.intersection([
    t.partial({
      from: Place_.Place,
      planId: Units_.Uuid,
      outwards: Itineraries,
      returns: Itineraries,
    }),
    t.type({
      from: Defined,
      planId: Defined,
      outwards: Defined,
      returns: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      from?: Place_.Place;
      planId?: Units_.Uuid;
      outwards?: Itineraries;
      returns?: Itineraries;
    } & {
      from: Defined;
      planId: Defined;
      outwards: Defined;
      returns: Defined;
    },
    Plan1Brand
  > => true,
  'Plan1',
);
export interface Plan1Brand {
  readonly Plan1: unique symbol;
}

// Plan2
// The purpose of this remains a mystery
export type Plan2 = t.Branded<
  {
    from?: Place_.Place;
    planId?: Units_.Uuid;
    itineraries?: Itineraries;
  } & {
    from: Defined;
    planId: Defined;
    itineraries: Defined;
  },
  Plan2Brand
>;
export const Plan2 = t.brand(
  t.intersection([
    t.partial({
      from: Place_.Place,
      planId: Units_.Uuid,
      itineraries: Itineraries,
    }),
    t.type({
      from: Defined,
      planId: Defined,
      itineraries: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      from?: Place_.Place;
      planId?: Units_.Uuid;
      itineraries?: Itineraries;
    } & {
      from: Defined;
      planId: Defined;
      itineraries: Defined;
    },
    Plan2Brand
  > => true,
  'Plan2',
);
export interface Plan2Brand {
  readonly Plan2: unique symbol;
}

// Plan
// The default export. More information at the top.
export type Plan = t.Branded<Plan1 | Plan2, PlanBrand>;
export const Plan = t.brand(
  t.union([Plan1, Plan2]),
  (x): x is t.Branded<Plan1 | Plan2, PlanBrand> => true,
  'Plan',
);
export interface PlanBrand {
  readonly Plan: unique symbol;
}

export default Plan;

// Success
