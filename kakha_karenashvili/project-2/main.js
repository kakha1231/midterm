const fs = require("fs");
const zip = require("zlib")
const filename = args[2];
const compress = args[3] ;
const newname = filename+'.out';
const stdpipe = [];
const readStream = fs.createReadStream(`./${filename}`);
stdpipe.push(readStream)
if (compress == 0) {
const transformer0 = createTransformlow();
  stdpipe.push(transformer0);
}
else if(compress == 1){
  const tarnsformer1 =  createTransformupper();
  newname = `${newname}.gz`;
  const gzip = createGzip();
  stdpipe.push(tarnsformer1,gzip);
}

const writeStream = fs.createWriteStream(newname);
pipeline(...stdpipe, writeStream, (err) => {
  if (err) {
    throw err;
  }
  console.log("Pipeline was successful");
});

function createTransformlow() {
    return new Transform({
    transform(chunk, enc, next) {
      next(null, chunk.toString().toLowercase());
    },
  });
}

function createTransformupper() {
    return new Transform({
    transform(chunk, enc, next) {
      next(null, chunk.toString().touppercase());
    },
  });
}