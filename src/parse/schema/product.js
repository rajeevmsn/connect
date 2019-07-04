module.exports = {
  className: 'Product',
  fields: {
    name: { type: 'String' },
    activationDate: { type: 'Date' },
    isActive: { type: 'Boolean' },
    owner: { type: 'Pointer', targetClass: '_User' },
  },
  classLevelPermissions: {
    find: { '*': true },
    get: { '*': true },
    create: { '*': true },
    update: { '*': true },
    delete: { '*': true },
    addField: { '*': false },
    protectedFields: { '*': [] },
  },
};
