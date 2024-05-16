export interface ProjectType {
  perPage: number;
  offset: number;
  size: number;
  totalPages: number;
  collection: CollectionType;
}

export interface CollectionType {
  hideAdminsLayers: boolean;
  patientId: unknown;
  description: unknown;
  numberOfSlides: number;
  numberOfImages: number;
  isReadOnly: boolean;
  ontologyName: unknown;
  id: number;
  class: string;
  ontology: unknown;
  numberOfJobAnnotations: number;
  patientName: unknown;
  blindMode: false;
  created: string;
  sex: unknown;
  numberOfAnnotations: number;
  areImagesDownloadable: boolean;
  isClosed: boolean;
  numberOfReviewedAnnotations: number;
  hideUsersLayers: boolean;
  name: string;
  updated: string;
  isRestricted: boolean;
  age: unknown;
  status: string;
}
