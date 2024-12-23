# Firmware Update Meta Data CC

?> CommandClass ID: `0x7a`

## Firmware Update Meta Data CC methods

### `getMetaData`

```ts
async getMetaData(): Promise<MaybeNotKnown<FirmwareUpdateMetaData>>;
```

Requests information about the current firmware on the device.

### `reportMetaData`

```ts
async reportMetaData(
	options: FirmwareUpdateMetaDataCCMetaDataReportOptions,
): Promise<void>;
```

### `requestUpdate`

```ts
async requestUpdate(
	options: FirmwareUpdateMetaDataCCRequestGetOptions,
): Promise<void>;
```

Requests the device to start the firmware update process.
This does not wait for the reply - that is up to the caller of this method.

### `sendFirmwareFragment`

```ts
async sendFirmwareFragment(
	fragmentNumber: number,
	isLastFragment: boolean,
	data: Uint8Array,
): Promise<void>;
```

Sends a fragment of the new firmware to the device.

### `activateFirmware`

```ts
async activateFirmware(
	options: FirmwareUpdateMetaDataCCActivationSetOptions,
): Promise<MaybeNotKnown<FirmwareUpdateActivationStatus>>;
```

Activates a previously transferred firmware image.
