import { IContentDocument } from '@nuxt/content/types/content';

export interface Recipe {
  name: string;
  description: string;
  times: Times;
  nbPeople: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
  comments?: string[];
  tags?: string[];
}

export interface Ingredient {
  id: string;
  label: string;
  value: number;
  unit: Unit;
  group?: string;
}

export interface Instruction {
  label: string;
  ingredients?: string[];
}

export interface Times {
  ready: number;
  work: number;
}

export type Unit = "g" | "unit" | "tablespoon" | "slice";

export type RecipeContent = Recipe & IContentDocument;
