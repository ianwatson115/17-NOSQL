var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Resistance = mongoose.model('Resistance', schema);