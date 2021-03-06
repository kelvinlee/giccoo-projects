Container = PIXI.Container
ParticleContainer = PIXI.particles.ParticleContainer
autoDetectRenderer = PIXI.autoDetectRenderer
loader = PIXI.loader
resources = PIXI.loader.resources
TextureCache = PIXI.utils.TextureCache
Texture = PIXI.Texture
Sprite = PIXI.Sprite
Graphics = PIXI.Graphics
resource = PIXI.loader.resources
Text = PIXI.Text
AnimatedSprite = PIXI.extras.AnimatedSprite

Spr = (id)->
	return new Sprite getTe id
getTe = (id)->
  return resource[id].texture
getId = (id,link)->
  return loader.resources[link].textures[id]

# for fix ios 8 less
unless Number.isInteger?
	Number.isInteger = (int)->
		return int >= 0