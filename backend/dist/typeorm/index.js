"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = exports.User = void 0;
const customer_entity_1 = require("./customer.entity");
Object.defineProperty(exports, "Customer", { enumerable: true, get: function () { return customer_entity_1.Customer; } });
const user_entity_1 = require("./user.entity");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_entity_1.User; } });
const entities = [user_entity_1.User, customer_entity_1.Customer];
exports.default = entities;
//# sourceMappingURL=index.js.map