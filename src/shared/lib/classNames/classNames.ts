export type Mods = Record<string, boolean | string | undefined>;

function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([className]) => className),
  ]
    .join(' ');
}

export { classNames };
