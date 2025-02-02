# Class: default

[Frontend/Renderers/GameRenderer/Entities/BackgroundRenderer](../modules/frontend_renderers_gamerenderer_entities_backgroundrenderer.md).default

## Hierarchy

- [_GenericRenderer_](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md)<_typeof_ [_MASK_PROGRAM_DEFINITION_](../modules/frontend_renderers_gamerenderer_programs_maskprogram.md#mask_program_definition)\>

  ↳ **default**

## Table of contents

### Constructors

- [constructor](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#constructor)

### Properties

- [attribData](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#attribdata)
- [attribManagers](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#attribmanagers)
- [bgCanvas](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#bgcanvas)
- [manager](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#manager)
- [matrixULoc](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#matrixuloc)
- [perlinThresholds](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#perlinthresholds)
- [program](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#program)
- [quadBuffer](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#quadbuffer)
- [uniformData](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#uniformdata)
- [uniformLocs](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#uniformlocs)
- [uniformSetters](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#uniformsetters)
- [verts](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#verts)

### Methods

- [drawChunks](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#drawchunks)
- [flush](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#flush)
- [setUniforms](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md#setuniforms)

## Constructors

### constructor

\+ **new default**(`manager`: [_GameGLManager_](frontend_renderers_gamerenderer_webgl_gameglmanager.gameglmanager.md)): [_default_](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md)

#### Parameters

| Name      | Type                                                                                    |
| :-------- | :-------------------------------------------------------------------------------------- |
| `manager` | [_GameGLManager_](frontend_renderers_gamerenderer_webgl_gameglmanager.gameglmanager.md) |

**Returns:** [_default_](frontend_renderers_gamerenderer_entities_backgroundrenderer.default.md)

Overrides: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md)

## Properties

### attribData

• **attribData**: AttribData

Uniform data for this program. Typically not used after construction.
Kept for use in inherited classes.

Inherited from: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md).[attribData](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md#attribdata)

---

### attribManagers

• **attribManagers**: _AttribManagers_<{ `attribs`: { `position`: { `dim`: _number_ = 3; `name`: _string_ ; `normalize`: _boolean_ = false; `type`: [_AttribType_](../enums/frontend_renderers_gamerenderer_enginetypes.attribtype.md) } } ; `fragmentShader`: _string_ ; `uniforms`: { `matrix`: { `name`: _string_ ; `type`: [_UniformType_](../enums/frontend_renderers_gamerenderer_enginetypes.uniformtype.md) } } ; `vertexShader`: _string_ }\>

A dictionary of attrib managers, keyed by attrib name.

Inherited from: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md).[attribManagers](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md#attribmanagers)

---

### bgCanvas

• **bgCanvas**: HTMLCanvasElement

---

### manager

• **manager**: [_GameGLManager_](frontend_renderers_gamerenderer_webgl_gameglmanager.gameglmanager.md)

WebGLManager corresponding to this program.

Overrides: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md).[manager](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md#manager)

---

### matrixULoc

• **matrixULoc**: `null` \| WebGLUniformLocation

---

### perlinThresholds

• **perlinThresholds**: _number_[]

---

### program

• **program**: WebGLProgram

The program corresponding to this renderer.

Inherited from: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md).[program](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md#program)

---

### quadBuffer

• **quadBuffer**: _number_[]

---

### uniformData

• **uniformData**: UniformData

Uniform data for this program. Typically not used after construction.
Kept for use in inherited classes.

Inherited from: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md).[uniformData](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md#uniformdata)

---

### uniformLocs

• **uniformLocs**: _UniformLocs_<{ `attribs`: { `position`: { `dim`: _number_ = 3; `name`: _string_ ; `normalize`: _boolean_ = false; `type`: [_AttribType_](../enums/frontend_renderers_gamerenderer_enginetypes.attribtype.md) } } ; `fragmentShader`: _string_ ; `uniforms`: { `matrix`: { `name`: _string_ ; `type`: [_UniformType_](../enums/frontend_renderers_gamerenderer_enginetypes.uniformtype.md) } } ; `vertexShader`: _string_ }\>

Uniform locs for this program. Typically not referenced directly,
but rather through generated uniformSetters. Kept for use in inherited classes.

Inherited from: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md).[uniformLocs](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md#uniformlocs)

---

### uniformSetters

• **uniformSetters**: _UniformSetters_<{ `attribs`: { `position`: { `dim`: _number_ = 3; `name`: _string_ ; `normalize`: _boolean_ = false; `type`: [_AttribType_](../enums/frontend_renderers_gamerenderer_enginetypes.attribtype.md) } } ; `fragmentShader`: _string_ ; `uniforms`: { `matrix`: { `name`: _string_ ; `type`: [_UniformType_](../enums/frontend_renderers_gamerenderer_enginetypes.uniformtype.md) } } ; `vertexShader`: _string_ }\>

A dictionary of uniform setters, keyed by uniform name.

Inherited from: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md).[uniformSetters](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md#uniformsetters)

---

### verts

• **verts**: _number_

The number of queued vertices so far. Used for batch rendering.

Inherited from: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md).[verts](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md#verts)

## Methods

### drawChunks

▸ **drawChunks**(`exploredChunks`: _Iterable_<[_Chunk_](_types_global_globaltypes.chunk.md)\>, `highPerfMode`: _boolean_, `drawChunkBorders`: _boolean_): _void_

#### Parameters

| Name               | Type                                                       |
| :----------------- | :--------------------------------------------------------- |
| `exploredChunks`   | _Iterable_<[_Chunk_](_types_global_globaltypes.chunk.md)\> |
| `highPerfMode`     | _boolean_                                                  |
| `drawChunkBorders` | _boolean_                                                  |

**Returns:** _void_

---

### flush

▸ **flush**(`drawMode?`: [_DrawMode_](../enums/frontend_renderers_gamerenderer_enginetypes.drawmode.md)): _void_

Draw all buffered vertices to the screen.

#### Parameters

| Name       | Type                                                                           | Description                                                     |
| :--------- | :----------------------------------------------------------------------------- | :-------------------------------------------------------------- |
| `drawMode` | [_DrawMode_](../enums/frontend_renderers_gamerenderer_enginetypes.drawmode.md) | The drawing mode for the buffered vertices. Default: Triangles. |

**Returns:** _void_

Inherited from: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md)

---

### setUniforms

▸ **setUniforms**(): _void_

**Returns:** _void_

Overrides: [GenericRenderer](frontend_renderers_gamerenderer_webgl_genericrenderer.genericrenderer.md)
