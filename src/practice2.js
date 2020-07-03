const inject = (items, sections) => {
  sections.map((item, index) =>
    items.splice(item.index + index, 0, item.content)
  );
  return items;
};
export { inject };
