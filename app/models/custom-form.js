import DS from 'ember-data';
import EmberValidations from 'ember-validations';
import { Model } from 'ember-pouch';
export default Model.extend(EmberValidations, {
  columns: DS.attr('number'),
  fields: DS.attr('custom-fields'),
  formType: DS.attr('string'),
  name: DS.attr('string'),

  validations: {
    formType: {
      presence: true
    },
    name: {
      presence: true
    },
    columns: {
      numericality: {
        allowBlank: true,
        onlyInteger: true,
        lessThanOrEqualTo: 12
      }
    }
  }
});