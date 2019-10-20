// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Meetup extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Meetup entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Meetup entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Meetup", id.toString(), this);
  }

  static load(id: string): Meetup | null {
    return store.get("Meetup", id) as Meetup | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get url(): string {
    let value = this.get("url");
    return value.toString();
  }

  set url(value: string) {
    this.set("url", Value.fromString(value));
  }

  get cid(): Bytes {
    let value = this.get("cid");
    return value.toBytes();
  }

  set cid(value: Bytes) {
    this.set("cid", Value.fromBytes(value));
  }

  get attendees(): Array<string | null> {
    let value = this.get("attendees");
    return value.toStringArray();
  }

  set attendees(value: Array<string | null>) {
    this.set("attendees", Value.fromStringArray(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (value === null) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(value as string));
    }
  }

  get start(): string | null {
    let value = this.get("start");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set start(value: string | null) {
    if (value === null) {
      this.unset("start");
    } else {
      this.set("start", Value.fromString(value as string));
    }
  }

  get ends(): string | null {
    let value = this.get("ends");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ends(value: string | null) {
    if (value === null) {
      this.unset("ends");
    } else {
      this.set("ends", Value.fromString(value as string));
    }
  }

  get image(): string | null {
    let value = this.get("image");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (value === null) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(value as string));
    }
  }

  get location(): string | null {
    let value = this.get("location");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set location(value: string | null) {
    if (value === null) {
      this.unset("location");
    } else {
      this.set("location", Value.fromString(value as string));
    }
  }
}

export class Attendee extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Attendee entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Attendee entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Attendee", id.toString(), this);
  }

  static load(id: string): Attendee | null {
    return store.get("Attendee", id) as Attendee | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }
}
