'use strict';

module.exports = function(Estadio) {

    // *** Hide unused methods
  // POST
  Estadio.disableRemoteMethodByName('create'); // Removes (POST) /edo
  Estadio.disableRemoteMethodByName('updateAll'); // Removes (POST) /edo/update
  Estadio.disableRemoteMethodByName('createChangeStream'); // Removes (GET|POST) /edo/change-stream
  Estadio.disableRemoteMethodByName('replaceOrCreate'); // Removes (GET|POST) edo/replaceOrCreate
  Estadio.disableRemoteMethodByName('replaceById'); // Removes (GET|POST) edo/existsHead
  Estadio.disableRemoteMethodByName('upsertWithWhere'); // Removes (GET|POST) edo/upsertWithWhere

  // PATCH
  Estadio.disableRemoteMethodByName('upsert'); // Removes (PUT) /edo
  Estadio.disableRemoteMethodByName('prototype.updateAttributes'); // Removes (PUT) /edo/:id

  // DELETE
  Estadio.disableRemoteMethodByName('deleteById'); // Removes (DELETE) /edo/:id

  // GET
  Estadio.disableRemoteMethodByName('exists'); // Removes (DELETE) /edo/:id
};
