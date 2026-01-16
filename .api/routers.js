
// Files Imports
import * as configure from "./configure.js";
import * as API_000 from "@api/root/src/api/analyze.ts";
import * as API_001 from "@api/root/src/api/data.ts";
import * as API_002 from "@api/root/src/api/issues.ts";
import * as API_003 from "@api/root/src/api/types.ts";

// Public RESTful API Methods and Paths
// This section describes the available HTTP methods and their corresponding endpoints (paths).
// USE    /api/analyze    src/api/analyze.ts?fn=default
// USE    /api/analyze    src/api/analyze.ts?fn=AUTH
// USE    /api/analyze    src/api/analyze.ts?fn=CRUD
// USE    /api/analyze    src/api/analyze.ts?fn=USE
// GET    /api/analyze    src/api/analyze.ts?fn=PING
// GET    /api/analyze    src/api/analyze.ts?fn=GET
// POST   /api/analyze    src/api/analyze.ts?fn=POST
// POST   /api/analyze    src/api/analyze.ts?fn=ACTION
// PATCH  /api/analyze    src/api/analyze.ts?fn=PATCH
// PUT    /api/analyze    src/api/analyze.ts?fn=PUT
// DELETE /api/analyze    src/api/analyze.ts?fn=DELETE
// USE    /api/analyze    src/api/analyze.ts?fn=ERROR
// USE    /api/data       src/api/data.ts?fn=default
// USE    /api/data       src/api/data.ts?fn=AUTH
// USE    /api/data       src/api/data.ts?fn=CRUD
// USE    /api/data       src/api/data.ts?fn=USE
// GET    /api/data       src/api/data.ts?fn=PING
// GET    /api/data       src/api/data.ts?fn=GET
// POST   /api/data       src/api/data.ts?fn=POST
// POST   /api/data       src/api/data.ts?fn=ACTION
// PATCH  /api/data       src/api/data.ts?fn=PATCH
// PUT    /api/data       src/api/data.ts?fn=PUT
// DELETE /api/data       src/api/data.ts?fn=DELETE
// USE    /api/data       src/api/data.ts?fn=ERROR
// USE    /api/issues     src/api/issues.ts?fn=default
// USE    /api/issues     src/api/issues.ts?fn=AUTH
// USE    /api/issues     src/api/issues.ts?fn=CRUD
// USE    /api/issues     src/api/issues.ts?fn=USE
// GET    /api/issues     src/api/issues.ts?fn=PING
// GET    /api/issues     src/api/issues.ts?fn=GET
// POST   /api/issues     src/api/issues.ts?fn=POST
// POST   /api/issues     src/api/issues.ts?fn=ACTION
// PATCH  /api/issues     src/api/issues.ts?fn=PATCH
// PUT    /api/issues     src/api/issues.ts?fn=PUT
// DELETE /api/issues     src/api/issues.ts?fn=DELETE
// USE    /api/issues     src/api/issues.ts?fn=ERROR
// USE    /api/types      src/api/types.ts?fn=default
// USE    /api/types      src/api/types.ts?fn=AUTH
// USE    /api/types      src/api/types.ts?fn=CRUD
// USE    /api/types      src/api/types.ts?fn=USE
// GET    /api/types      src/api/types.ts?fn=PING
// GET    /api/types      src/api/types.ts?fn=GET
// POST   /api/types      src/api/types.ts?fn=POST
// POST   /api/types      src/api/types.ts?fn=ACTION
// PATCH  /api/types      src/api/types.ts?fn=PATCH
// PUT    /api/types      src/api/types.ts?fn=PUT
// DELETE /api/types      src/api/types.ts?fn=DELETE
// USE    /api/types      src/api/types.ts?fn=ERROR

const internal  = [
  API_000.default  && { cb: API_000.default , method: "use"    , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=default" },
  API_000.AUTH     && { cb: API_000.AUTH    , method: "use"    , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=AUTH"    },
  API_000.CRUD     && { cb: API_000.CRUD    , method: "use"    , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=CRUD"    },
  API_000.USE      && { cb: API_000.USE     , method: "use"    , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=USE"     },
  API_000.PING     && { cb: API_000.PING    , method: "get"    , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=PING"    },
  API_000.GET      && { cb: API_000.GET     , method: "get"    , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=GET"     },
  API_000.POST     && { cb: API_000.POST    , method: "post"   , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=POST"    },
  API_000.ACTION   && { cb: API_000.ACTION  , method: "post"   , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=ACTION"  },
  API_000.PATCH    && { cb: API_000.PATCH   , method: "patch"  , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=PATCH"   },
  API_000.PUT      && { cb: API_000.PUT     , method: "put"    , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=PUT"     },
  API_000.DELETE   && { cb: API_000.DELETE  , method: "delete" , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=DELETE"  },
  API_000.ERROR    && { cb: API_000.ERROR   , method: "use"    , route: "/analyze" , url: "/api/analyze" , source: "src/api/analyze.ts?fn=ERROR"   },
  API_001.default  && { cb: API_001.default , method: "use"    , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=default"    },
  API_001.AUTH     && { cb: API_001.AUTH    , method: "use"    , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=AUTH"       },
  API_001.CRUD     && { cb: API_001.CRUD    , method: "use"    , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=CRUD"       },
  API_001.USE      && { cb: API_001.USE     , method: "use"    , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=USE"        },
  API_001.PING     && { cb: API_001.PING    , method: "get"    , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=PING"       },
  API_001.GET      && { cb: API_001.GET     , method: "get"    , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=GET"        },
  API_001.POST     && { cb: API_001.POST    , method: "post"   , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=POST"       },
  API_001.ACTION   && { cb: API_001.ACTION  , method: "post"   , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=ACTION"     },
  API_001.PATCH    && { cb: API_001.PATCH   , method: "patch"  , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=PATCH"      },
  API_001.PUT      && { cb: API_001.PUT     , method: "put"    , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=PUT"        },
  API_001.DELETE   && { cb: API_001.DELETE  , method: "delete" , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=DELETE"     },
  API_001.ERROR    && { cb: API_001.ERROR   , method: "use"    , route: "/data"    , url: "/api/data"    , source: "src/api/data.ts?fn=ERROR"      },
  API_002.default  && { cb: API_002.default , method: "use"    , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=default"  },
  API_002.AUTH     && { cb: API_002.AUTH    , method: "use"    , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=AUTH"     },
  API_002.CRUD     && { cb: API_002.CRUD    , method: "use"    , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=CRUD"     },
  API_002.USE      && { cb: API_002.USE     , method: "use"    , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=USE"      },
  API_002.PING     && { cb: API_002.PING    , method: "get"    , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=PING"     },
  API_002.GET      && { cb: API_002.GET     , method: "get"    , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=GET"      },
  API_002.POST     && { cb: API_002.POST    , method: "post"   , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=POST"     },
  API_002.ACTION   && { cb: API_002.ACTION  , method: "post"   , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=ACTION"   },
  API_002.PATCH    && { cb: API_002.PATCH   , method: "patch"  , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=PATCH"    },
  API_002.PUT      && { cb: API_002.PUT     , method: "put"    , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=PUT"      },
  API_002.DELETE   && { cb: API_002.DELETE  , method: "delete" , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=DELETE"   },
  API_002.ERROR    && { cb: API_002.ERROR   , method: "use"    , route: "/issues"  , url: "/api/issues"  , source: "src/api/issues.ts?fn=ERROR"    },
  API_003.default  && { cb: API_003.default , method: "use"    , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=default"   },
  API_003.AUTH     && { cb: API_003.AUTH    , method: "use"    , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=AUTH"      },
  API_003.CRUD     && { cb: API_003.CRUD    , method: "use"    , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=CRUD"      },
  API_003.USE      && { cb: API_003.USE     , method: "use"    , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=USE"       },
  API_003.PING     && { cb: API_003.PING    , method: "get"    , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=PING"      },
  API_003.GET      && { cb: API_003.GET     , method: "get"    , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=GET"       },
  API_003.POST     && { cb: API_003.POST    , method: "post"   , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=POST"      },
  API_003.ACTION   && { cb: API_003.ACTION  , method: "post"   , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=ACTION"    },
  API_003.PATCH    && { cb: API_003.PATCH   , method: "patch"  , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=PATCH"     },
  API_003.PUT      && { cb: API_003.PUT     , method: "put"    , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=PUT"       },
  API_003.DELETE   && { cb: API_003.DELETE  , method: "delete" , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=DELETE"    },
  API_003.ERROR    && { cb: API_003.ERROR   , method: "use"    , route: "/types"   , url: "/api/types"   , source: "src/api/types.ts?fn=ERROR"     }
].filter(it => it);

export const routers = internal.map((it) => {
  const { method, route, url, source } = it;
  return { method, url, route, source };
});

export const endpoints = internal.map(
  (it) => it.method?.toUpperCase() + "\t" + it.url
);

export const applyRouters = (applyRouter) => {
  internal.forEach((it) => {
    it.cb = configure.callbackBefore?.(it.cb, it) || it.cb;
    applyRouter(it);
  });
};

