Container = PIXI.Container
ParticleContainer = PIXI.ParticleContainer
autoDetectRenderer = PIXI.autoDetectRenderer
loader = PIXI.loader
resources = PIXI.loader.resources
TextureCache = PIXI.utils.TextureCache
Texture = PIXI.Texture
Sprite = PIXI.Sprite
resource = PIXI.loader.resources

getTe = (id)->
  return resource[id].texture
getId = (id,link)->
  return loader.resources[link].textures[id]