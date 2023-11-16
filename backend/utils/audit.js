```javascript
const winston = require('winston');

const auditLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'audit.log', level: 'info' }),
    new winston.transports.Console()
  ]
});

function logAudit(action, user, details) {
  auditLogger.info({
    timestamp: new Date().toISOString(),
    action,
    user,
    details
  });
}

module.exports = {
  logAudit
};
```