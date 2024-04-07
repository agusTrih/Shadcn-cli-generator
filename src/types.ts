type Component = {
  id: number;
  slug: string;
  title: string;
  url: string;
  isNew: boolean;
};

type Group = {
  title: string;
  id: number;
  components: Component[];
};

type ComponentsList = Group[];


export type { Component, Group, ComponentsList };