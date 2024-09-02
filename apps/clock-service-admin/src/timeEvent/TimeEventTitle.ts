import { TimeEvent as TTimeEvent } from "../api/timeEvent/TimeEvent";

export const TIMEEVENT_TITLE_FIELD = "id";

export const TimeEventTitle = (record: TTimeEvent): string => {
  return record.id?.toString() || String(record.id);
};
