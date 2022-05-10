let message;
message = 'hey'
// now message is of type any
// to change it to string and use its benefits we need to assert

// way 1
let endsWithY = (<string>message).endsWith('y')

// way 2
let endsWithYAlt = (message as string).endsWith('y')