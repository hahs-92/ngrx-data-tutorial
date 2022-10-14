import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

//cuando se modularizo la app
// ya no se utiliza
const entityMetadata: EntityMetadataMap = {
  Post: {
    //podemos agregar opciones de optimizacion
    entityDispatcherOptions: {
      //indica que actualiza el store al mismo tiempo que hace el
      //llamdo a la api, es decir no espera hasta que la api responda 200,
      // para hacer el update
      optimisticUpdate: true,
    },
  },
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
};
