
export function setJsonHeaders(req, res, next) {
  try {
    if(['POST', 'PUT', 'PATCH'].indexOf(req.method) > -1) {
      req.headers['Accept'] = 'application/json';
      req.headers['Content-Type'] = 'application/json';
    }
  } catch (err) {
    console.log('setJsonHeaders - error: ', err);
  }
  next();
}
