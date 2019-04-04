
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout key.pem \
  -out cert.pem

npm i \
  @babel/core \
  @babel/plugin-proposal-object-rest-spread \
  @babel/plugin-transform-arrow-functions \
  @babel/plugin-transform-block-scoped-functions \
  @babel/plugin-transform-block-scoping \
  @babel/plugin-transform-computed-properties \
  @babel/plugin-transform-destructuring \
  @babel/plugin-transform-function-name \
  @babel/plugin-transform-parameters \
  @babel/plugin-transform-shorthand-properties \
  @babel/plugin-transform-spread \
  @babel/plugin-transform-template-literals \

npm i -D \
  serve-handler \

(cd apps/almost-realtime && sh install.sh)
