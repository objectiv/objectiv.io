import DeviceDetector from 'device-detector-js';
import { DateTime } from 'luxon';

export const deviceContextFactory = () => {
  const deviceDetector = new DeviceDetector();
  const deviceInfo = deviceDetector.parse(navigator.userAgent);
  const datetime = DateTime.local();

  return {
    _context_type: 'DeviceContext',
    id: 'device',
    'user-agent': navigator.userAgent,
    ...{
      ...deviceInfo.client,
      ...deviceInfo.os,
      ...deviceInfo.device,
    },
    timestamp: Date.now(),
    timeZoneName: datetime.zoneName,
    timeOffset: datetime.offset,
    timeOffsetNameShort: datetime.offsetNameShort,
    timeOffsetNameLong: datetime.offsetNameLong,
    timeIsOffsetFixed: datetime.isOffsetFixed,
    timeIsInDST: datetime.isInDST,
    timeIsInLeapYear: datetime.isInLeapYear,
  };
};
