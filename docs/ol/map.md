# Map

```js
import Map from 'ol/Map.js';
```

地图是 OpenLayers 的核心组件。对于要渲染的地图，视图 需要一个或多个层和一个目标容器：

```js
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

const map = new Map({
  view: new View({
    center: [0, 0],
    zoom: 1,
  }),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
});
```

使用了一个瓦片图层（TileLayer）来显示开放街道地图（OpenStreetMap，简称OSM）的数据，并将其渲染到ID为  .map  的DOM元素中。