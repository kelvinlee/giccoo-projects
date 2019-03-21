"use strict";function initSound(){}function initSound(){}function setMeshPhy(e,o,t){t||(t=1);var a=e.geometry.attributes.position.array,n=[],r;for(r=0;r<e.geometry.attributes.position.array.length;r+=3)n.push(new CANNON.Vec3(a[r]*t,a[r+1]*t,a[r+2]*t));var i=new THREE.Geometry;i.fromBufferGeometry(e.geometry);var s=new CANNON.ConvexPolyhedron(n,i.face);o.addShape(s)}function vec3toVector3(e){var o;return new THREE.Vector3(e.x,e.y,e.z)}function setMeshPhy(e,o,t){t||(t=1);var a=e.geometry.attributes.position.array,n=[],r;for(r=0;r<e.geometry.attributes.position.array.length;r+=3)n.push(new CANNON.Vec3(a[r]*t,a[r+1]*t,a[r+2]*t));var i=new THREE.Geometry;i.fromBufferGeometry(e.geometry);var s=new CANNON.ConvexPolyhedron(n,i.face);o.addShape(s)}function vec3toVector3(e){var o;return new THREE.Vector3(e.x,e.y,e.z)}function Fog(e,o,t){this.name="",this.color=new Color(e),this.near=void 0!==o?o:1,this.far=void 0!==t?t:1e3}function setGifts(){gift1=objs.gift1.clone();var e=objs.gift1.material.map,o=new THREE.MeshToonMaterial({color:15910477,emissive:15910477,emissiveIntensity:.1});gift1.material=o,gift2=objs.gift2.clone();var t=objs.gift2.material.map,a=new THREE.MeshToonMaterial({color:15910477,emissive:15910477,emissiveIntensity:.1});gift2.material=a,gift3=objs.gift3.clone();var n=objs.gift3.material.map,r=new THREE.MeshToonMaterial({color:15910477,emissive:15910477,emissiveIntensity:.1});gift3.material=r,gift4=objs.gift4.clone();var i=objs.gift4.material.map,s=new THREE.MeshBasicMaterial({map:i,reflectivity:0});gift4.material=s}function addGift(){if(console.log("加个礼物"),7==level)for(var e=0;e<giftsNum[level];e++)setTimeout(addAGift,30*e),removeJointConstraint(),document.removeEventListener("touchstart",onDocumentTouchStart,!1),TweenMax.to(rootPointBody.position,2.5,{y:120});else for(var e=0;e<giftsNum[level];e++)setTimeout(addAGift,60*e)}function addAGift(){var e=nowGiftType;4==++nowGiftType&&(nowGiftType=0);var o,t=[gift1,gift2,gift3,gift4][e].clone();switch(t.scale.set(.1*giftScale,.1*giftScale,.1*giftScale),t.castShadow=!0,scene.add(t),meshes.push(t),TweenMax.from(t.scale,2,{x:.01,y:.01,z:.01,ease:Elastic.easeOut}),e){case 0:var a=new CANNON.Cylinder(3*giftScale,3*giftScale,.5*giftScale,12);break;case 1:var a=new CANNON.Sphere(2.5*giftScale);break;case 2:var a=new CANNON.Box(new CANNON.Vec3(4.5*giftScale,1.3*giftScale,1.5*giftScale));break;case 3:var a=new CANNON.Box(new CANNON.Vec3(3*giftScale,4.5*giftScale,.5*giftScale));break}var n=new CANNON.Body({mass:10,position:new CANNON.Vec3(0,0,0)});n.addShape(a),n.position.set(pigBody.position.x,pigBody.position.y-20,pigBody.position.z),n.angularVelocity=new CANNON.Vec3(4*Math.random()-2,4*Math.random()-2,4*Math.random()-2),n.velocity=new CANNON.Vec3(4*Math.random()-2,4*Math.random()-2,4*Math.random()-2),world.add(n),bodies.push(n)}function aniDone(){console.log("完成")}function setLeftFoot(){leftFoot=objs.foot.clone(),scene.add(leftFoot),leftFoot.scale.set(pigScale,pigScale,pigScale),leftFoot.position.set(0,0,0),leftFoot.castShadow=!0;var e=objs.foot.material.map,o=new THREE.MeshBasicMaterial({map:e});leftFoot.material=o;var t=new THREE.BoxGeometry(1,1,1),a=new THREE.MeshBasicMaterial({color:16776960});leftFootJoint=new THREE.Mesh(t,a),setLeftFootPhy()}function setLeftFootPhy(){leftFootShap=new CANNON.Sphere(20*pigScale),leftFootBody=new CANNON.Body({mass:5,position:new CANNON.Vec3(20*pigScale,0,0),shape:leftFootShap,linearDamping:footLinearDamping,angularDamping:footAngularDamping}),world.add(leftFootBody),meshes.push(leftFoot),bodies.push(leftFootBody),leftFoot.userData.body=leftFootBody,leftFootJointBody=new CANNON.Body({mass:1,position:new CANNON.Vec3(20*pigScale,50*pigScale,10*pigScale),linearDamping:footLinearDamping,angularDamping:footAngularDamping}),world.add(leftFootJointBody),meshes.push(leftFootJoint),bodies.push(leftFootJointBody);var e=new CANNON.ConeTwistConstraint(leftFootJointBody,pigBody,{pivotA:new CANNON.Vec3(0,0,0),pivotB:new CANNON.Vec3(20*pigScale,-114.6146*pigScale/1.2,30*pigScale),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(e);var o=new CANNON.ConeTwistConstraint(leftFootBody,leftFootJointBody,{pivotA:new CANNON.Vec3(0,50*pigScale/1.2,0),pivotB:new CANNON.Vec3(0,0,0),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(o),leftFootCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)]),(leftLegGeo=new THREE.TubeBufferGeometry(leftFootCurve,20,3*pigScale,8,!1)).attributes.position.needsUpdate=!0,leftLegMat=new THREE.MeshBasicMaterial({color:14850203}),leftLeg=new THREE.Mesh(leftLegGeo,leftLegMat),scene.add(leftLeg)}function setRightFoot(){rightFoot=objs.foot.clone(),scene.add(rightFoot),rightFoot.scale.set(pigScale,pigScale,pigScale),rightFoot.position.set(0,0,0),rightFoot.castShadow=!0;var e=rightFoot.material.map,o=new THREE.MeshBasicMaterial({map:e});rightFoot.material=o;var t=new THREE.BoxGeometry(1,1,1),a=new THREE.MeshBasicMaterial({color:16776960});rightFootJoint=new THREE.Mesh(t,a),setRightFootPhy()}function setRightFootPhy(){rightFootShap=new CANNON.Sphere(20*pigScale),rightFootBody=new CANNON.Body({mass:5,position:new CANNON.Vec3(-20*pigScale,0,0),shape:rightFootShap,linearDamping:footLinearDamping,angularDamping:footAngularDamping}),console.log(rightFootBody.linearDamping),world.add(rightFootBody),meshes.push(rightFoot),bodies.push(rightFootBody),rightFoot.userData.body=rightFootBody,rightFootJointBody=new CANNON.Body({mass:1,position:new CANNON.Vec3(-20*pigScale,50*pigScale,30*pigScale),linearDamping:footLinearDamping,angularDamping:footAngularDamping}),world.add(rightFootJointBody),meshes.push(rightFootJoint),bodies.push(rightFootJointBody);var e=new CANNON.ConeTwistConstraint(rightFootJointBody,pigBody,{pivotA:new CANNON.Vec3(0,0,0),pivotB:new CANNON.Vec3(-20*pigScale,-114.6146*pigScale/1.2,30*pigScale),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(e);var o=new CANNON.ConeTwistConstraint(rightFootBody,rightFootJointBody,{pivotA:new CANNON.Vec3(0,50*pigScale/1.2,0),pivotB:new CANNON.Vec3(0,0,0),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(o),rightFootCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)]),(rightLegGeo=new THREE.TubeBufferGeometry(rightFootCurve,20,3*pigScale,8,!1)).attributes.position.needsUpdate=!0,rightLegMat=new THREE.MeshBasicMaterial({color:14850203}),rightLeg=new THREE.Mesh(rightLegGeo,rightLegMat),scene.add(rightLeg)}function setRightHand(){rightHand=objs.foot.clone(),scene.add(rightHand),rightHand.scale.set(pigScale,pigScale,pigScale),rightHand.position.set(0,0,0),rightHand.castShadow=!0;var e=rightHand.material.map,o=new THREE.MeshBasicMaterial({map:e});rightHand.material=o;var t=new THREE.BoxGeometry(1,1,1),a=new THREE.MeshBasicMaterial({color:16776960});rightHandJoint=new THREE.Mesh(t,a),setRightHandPhy()}function setRightHandPhy(){rightHandShap=new CANNON.Sphere(20*pigScale),rightHandBody=new CANNON.Body({mass:5,position:new CANNON.Vec3(-20*pigScale,0,0),shape:rightHandShap,linearDamping:handLinearDamping,angularDamping:handAngularDamping}),world.add(rightHandBody),meshes.push(rightHand),bodies.push(rightHandBody),rightHand.userData.body=rightHandBody,rightHandJointBody=new CANNON.Body({mass:1,position:new CANNON.Vec3(-20*pigScale,50*pigScale,30*pigScale),linearDamping:handLinearDamping,angularDamping:handAngularDamping}),world.add(rightHandJointBody),meshes.push(rightHandJoint),bodies.push(rightHandJointBody);var e=new CANNON.ConeTwistConstraint(rightHandJointBody,pigBody,{pivotA:new CANNON.Vec3(0,0,0),pivotB:new CANNON.Vec3(-60*pigScale,-60*pigScale/1.5,10*pigScale),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(e);var o=new CANNON.ConeTwistConstraint(rightHandBody,rightHandJointBody,{pivotA:new CANNON.Vec3(0,50*pigScale/1.5,0),pivotB:new CANNON.Vec3(0,0,0),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(o),rightHandCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)]),(rightArmGeo=new THREE.TubeBufferGeometry(rightHandCurve,20,3*pigScale,8,!1)).attributes.position.needsUpdate=!0,rightArmMat=new THREE.MeshBasicMaterial({color:14850203}),rightArm=new THREE.Mesh(rightArmGeo,rightArmMat),scene.add(rightArm)}function setLeftHand(){leftHand=objs.foot.clone(),scene.add(leftHand),leftHand.scale.set(pigScale,pigScale,pigScale),leftHand.position.set(0,0,0),leftHand.castShandow=!0;var e=leftHand.material.map,o=new THREE.MeshBasicMaterial({map:e});leftHand.material=o;var t=new THREE.BoxGeometry(1,1,1),a=new THREE.MeshBasicMaterial({color:16776960});leftHandJoint=new THREE.Mesh(t,a),setLeftHandPhy()}function setLeftHandPhy(){leftHandShap=new CANNON.Sphere(20*pigScale),leftHandBody=new CANNON.Body({mass:5,position:new CANNON.Vec3(20*pigScale,0,0),shape:leftHandShap,linearDamping:handLinearDamping,angularDamping:handAngularDamping}),leftHand.castShadow=!0,world.add(leftHandBody),meshes.push(leftHand),bodies.push(leftHandBody),leftHand.userData.body=leftHandBody,leftHandJointBody=new CANNON.Body({mass:1,position:new CANNON.Vec3(20*pigScale,50*pigScale,30*pigScale),linearDamping:handLinearDamping,angularDamping:handAngularDamping}),world.add(leftHandJointBody),meshes.push(leftHandJoint),bodies.push(leftHandJointBody);var e=new CANNON.ConeTwistConstraint(leftHandJointBody,pigBody,{pivotA:new CANNON.Vec3(0,0,0),pivotB:new CANNON.Vec3(60*pigScale,-60*pigScale/1.5,10*pigScale),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(e);var o=new CANNON.ConeTwistConstraint(leftHandBody,leftHandJointBody,{pivotA:new CANNON.Vec3(0,50*pigScale/1.5,0),pivotB:new CANNON.Vec3(0,0,0),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(o),leftHandCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)]),(leftArmGeo=new THREE.TubeBufferGeometry(leftHandCurve,20,3*pigScale,8,!1)).attributes.position.needsUpdate=!0,leftArmMat=new THREE.MeshBasicMaterial({color:14850203}),leftArm=new THREE.Mesh(leftArmGeo,leftArmMat),scene.add(leftArm)}function setHeadLine(){}function updateArmLegs(){pigBody.quaternion.inverse();var e=pigBody.quaternion.vmult(new CANNON.Vec3(20*pigScale,-90*pigScale,30*pigScale)).vadd(pigBody.position);leftFootCurve=new THREE.CatmullRomCurve3([vec3toVector3(e),vec3toVector3(leftFootJointBody.position),vec3toVector3(leftFootBody.position)]),leftLegGeo.copy(new THREE.TubeBufferGeometry(leftFootCurve,20,15*pigScale,8,!1));var o=pigBody.quaternion.vmult(new CANNON.Vec3(-20*pigScale,-90*pigScale,30*pigScale)).vadd(pigBody.position);rightFootCurve=new THREE.CatmullRomCurve3([vec3toVector3(o),vec3toVector3(rightFootJointBody.position),vec3toVector3(rightFootBody.position)]),rightLegGeo.copy(new THREE.TubeBufferGeometry(rightFootCurve,20,15*pigScale,8,!1));var t=pigBody.quaternion.vmult(new CANNON.Vec3(-30*pigScale,-30*pigScale,30*pigScale)).vadd(pigBody.position);rightHandCurve=new THREE.CatmullRomCurve3([vec3toVector3(t),vec3toVector3(rightHandJointBody.position),vec3toVector3(rightHandBody.position)]),rightArmGeo.copy(new THREE.TubeBufferGeometry(rightHandCurve,20,15*pigScale,8,!1));var a=pigBody.quaternion.vmult(new CANNON.Vec3(30*pigScale,-30*pigScale,30*pigScale)).vadd(pigBody.position);leftHandCurve=new THREE.CatmullRomCurve3([vec3toVector3(a),vec3toVector3(leftHandJointBody.position),vec3toVector3(leftHandBody.position)]),leftArmGeo.copy(new THREE.TubeBufferGeometry(leftHandCurve,20,15*pigScale,8,!1))}function makeLine(e,o){var t=new MeshLine;t.setGeometry(e);var a=new MeshLineMaterial({useMap:!1,color:o,opacity:1,sizeAttenuation:!0,lineWidth:.5,near:camera.near,far:camera.far});lineMesh=new THREE.Mesh(t.geometry,a),scene.add(lineMesh),lines.push(lineMesh)}function initDof(){var e=THREE.BokehDepthShader;(materialDepth=new THREE.ShaderMaterial({uniforms:e.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})).uniforms.mNear.value=camera.near,materialDepth.uniforms.mFar.value=camera.far;for(var o=new THREE.PlaneBufferGeometry(10,10,1,1),t=new THREE.MeshPhongMaterial({color:6710886,shininess:.5,specular:16777215,side:THREE.DoubleSide}),a=Math.random,n=0;n<leaves;n++){var r=new THREE.Mesh(o,t);r.rotation.set(a(),a(),a()),r.rotation.dx=.1*a(),r.rotation.dy=.1*a(),r.rotation.dz=.1*a(),r.position.set(150*a(),0+300*a(),150*a()),r.position.dx=a()-.5,r.position.dz=a()-.5,scene.add(r),planes.push(r)}for(var i=new THREE.SphereBufferGeometry(1,20,20),n=0;n<20;n++){var s=new THREE.MeshPhongMaterial({color:16777215*Math.random(),shininess:.5,specular:16777215}),d=new THREE.Mesh(i,s);d.position.x=200*(Math.random()-.5),d.position.y=50*Math.random(),d.position.z=200*(Math.random()-.5),d.scale.multiplyScalar(10),scene.add(d)}initPostprocessing(),stats=new Stats,document.addEventListener("mousemove",onDocumentMouseMove,!1),document.addEventListener("touchstart",onDocumentTouchStart,!1),document.addEventListener("touchmove",onDocumentTouchMove,!1),effectController={enabled:!0,jsDepthCalculation:!0,shaderFocus:!1,fstop:2.2,maxblur:1,showFocus:!1,focalDepth:2.8,manualdof:!1,vignetting:!1,depthblur:!1,threshold:.5,gain:2,bias:.5,fringe:.7,focalLength:35,noise:!0,pentagon:!1,dithering:1e-4};var c=function e(){for(var o in effectController)o in postprocessing.bokeh_uniforms&&(postprocessing.bokeh_uniforms[o].value=effectController[o]);postprocessing.enabled=effectController.enabled,postprocessing.bokeh_uniforms.znear.value=camera.near,postprocessing.bokeh_uniforms.zfar.value=camera.far,camera.setFocalLength(effectController.focalLength)},l=new dat.GUI;l.add(effectController,"enabled").onChange(c),l.add(effectController,"jsDepthCalculation").onChange(c),l.add(effectController,"shaderFocus").onChange(c),l.add(effectController,"focalDepth",0,200).listen().onChange(c),l.add(effectController,"fstop",.1,22,.001).onChange(c),l.add(effectController,"maxblur",0,5,.025).onChange(c),l.add(effectController,"showFocus").onChange(c),l.add(effectController,"manualdof").onChange(c),l.add(effectController,"vignetting").onChange(c),l.add(effectController,"depthblur").onChange(c),l.add(effectController,"threshold",0,1,.001).onChange(c),l.add(effectController,"gain",0,100,.001).onChange(c),l.add(effectController,"bias",0,3,.001).onChange(c),l.add(effectController,"fringe",0,5,.001).onChange(c),l.add(effectController,"focalLength",16,80,.001).onChange(c),l.add(effectController,"noise").onChange(c),l.add(effectController,"dithering",0,.001,1e-4).onChange(c),l.add(effectController,"pentagon").onChange(c),l.add(shaderSettings,"rings",1,8).step(1).onChange(shaderUpdate),l.add(shaderSettings,"samples",1,13).step(1).onChange(shaderUpdate),c(),window.addEventListener("resize",onWindowResize,!1)}function onWindowResize(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}function onDocumentMouseMove(e){mouse.x=(e.clientX-windowHalfX)/windowHalfX,mouse.y=-(e.clientY-windowHalfY)/windowHalfY,postprocessing.bokeh_uniforms.focusCoords.value.set(e.clientX/window.innerWidth,1-e.clientY/window.innerHeight)}function onDocumentTouchStart(e){1==e.touches.length&&(e.preventDefault(),mouse.x=(e.touches[0].pageX-windowHalfX)/windowHalfX,mouse.y=-(e.touches[0].pageY-windowHalfY)/windowHalfY)}function onDocumentTouchMove(e){1==e.touches.length&&(e.preventDefault(),mouse.x=(e.touches[0].pageX-windowHalfX)/windowHalfX,mouse.y=-(e.touches[0].pageY-windowHalfY)/windowHalfY)}function initPostprocessing(){postprocessing.scene=new THREE.Scene,postprocessing.camera=new THREE.OrthographicCamera(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,-1e4,1e4),postprocessing.camera.position.z=100,postprocessing.scene.add(postprocessing.camera);var e={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat};postprocessing.rtTextureDepth=new THREE.WebGLRenderTarget(window.innerWidth,window.innerHeight,e),postprocessing.rtTextureColor=new THREE.WebGLRenderTarget(window.innerWidth,window.innerHeight,e);var o=THREE.BokehShader;postprocessing.bokeh_uniforms=THREE.UniformsUtils.clone(o.uniforms),postprocessing.bokeh_uniforms.tColor.value=postprocessing.rtTextureColor.texture,postprocessing.bokeh_uniforms.tDepth.value=postprocessing.rtTextureDepth.texture,postprocessing.bokeh_uniforms.textureWidth.value=window.innerWidth,postprocessing.bokeh_uniforms.textureHeight.value=window.innerHeight,postprocessing.materialBokeh=new THREE.ShaderMaterial({uniforms:postprocessing.bokeh_uniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{RINGS:shaderSettings.rings,SAMPLES:shaderSettings.samples}}),postprocessing.quad=new THREE.Mesh(new THREE.PlaneBufferGeometry(window.innerWidth,window.innerHeight),postprocessing.materialBokeh),postprocessing.quad.position.z=-500,postprocessing.scene.add(postprocessing.quad)}function shaderUpdate(){postprocessing.materialBokeh.defines.RINGS=shaderSettings.rings,postprocessing.materialBokeh.defines.SAMPLES=shaderSettings.samples,postprocessing.materialBokeh.needsUpdate=!0}function animateDof(){requestAnimationFrame(animateDof,renderer.domElement),render(),stats.update()}function linearize(e){var o=camera.far,t=camera.near;return-o*t/(e*(o-t)-o)}function smoothstep(e,o,t){var a=saturate((t-e)/(o-e));return a*a*(3-2*a)}function saturate(e){return Math.max(0,Math.min(1,e))}function renderDof(){var e=15e-5*Date.now();if(camera.updateMatrixWorld(),effectController.jsDepthCalculation){raycaster.setFromCamera(mouse,camera);var o=raycaster.intersectObjects(scene.children,!0);if(o.length>0){var t=o[0].distance;distance+=.03*(t-distance);var a,n=linearize(1-smoothstep(camera.near,camera.far,distance));postprocessing.bokeh_uniforms.focalDepth.value=n,effectController.focalDepth=n}}for(var r=0;r<leaves;r++){var i=planes[r];i.rotation.x+=i.rotation.dx,i.rotation.y+=i.rotation.dy,i.rotation.z+=i.rotation.dz,i.position.y-=2,i.position.x+=i.position.dx,i.position.z+=i.position.dz,i.position.y<0&&(i.position.y+=300)}postprocessing.enabled?(renderer.clear(),renderer.render(scene,camera,postprocessing.rtTextureColor,!0),scene.overrideMaterial=materialDepth,renderer.render(scene,camera,postprocessing.rtTextureDepth,!0),scene.overrideMaterial=null,renderer.render(postprocessing.scene,postprocessing.camera)):(scene.overrideMaterial=null,renderer.clear(),renderer.render(scene,camera))}function setFire(){objs.fire.scale.set(.1,.1,.1),objs.fire.children[1].castShadow=!0,objs.fire.children[1].receiveShadow=!0,objs.fire.children[2].castShadow=!0,objs.fire.children[2].receiveShadow=!0,scene.add(fire),fire.add(objs.fire),fire.position.set(-60,4,160),fire.scale.set(.5,.5,.5);for(var e=0;e<30;e++)addAfire();var o=new THREE.PointLight(16720384,4,80,3);o.position.y=10,fire.add(o)}function addAfire(){var e=new THREE.SpriteMaterial({color:16727040}),o=new THREE.Sprite(e);o.scale.set(3.5,3.5,1),o.material.transparent=!0,fire.add(o);var t=2,a=2*Math.random(),n=new THREE.Color(16711680),r=new THREE.Color(16777096);TweenMax.to(n,2,{r:r.r,g:r.g,b:r.b,repeat:1e4,delay:a+.05,onUpdate:function e(){o.material.color=n}}),o.position.set(8*Math.random()-4,0,10*Math.random()-5),TweenMax.to(o.position,2,{y:20+10*Math.random(),repeat:1e4,delay:a}),TweenMax.to(o.scale,2,{x:6,y:6,repeat:1e4,delay:a}),TweenMax.to(o.material,2,{opacity:0,repeat:1e4,delay:a}),TweenMax.to(o.position,2*(Math.random()+1),{x:16*Math.random()-8,z:16*Math.random()-8,yoyo:!0,repeat:1e4,delay:a,ease:Sine.easeInOut}),TweenMax.to(o.material,2,{rotation:Math.PI*(4*Math.random()-2),repeat:1e4})}function setSun(){var e=new THREE.HemisphereLight(16777215,35071,.1);e.position.set(0,10,0),scene.add(e);var o=new THREE.Color(0),t=new THREE.Color(16731648),a=new THREE.Color(16770242),n=new THREE.Color(38655),r=new THREE.Color(0),i=new THREE.Color(0),s=new THREE.Color(35071),d=new THREE.Color(16770242),c=new THREE.Color(16720384),l=new THREE.Color(0),g=new TimelineMax({repeat:1e4});g.add(TweenMax.to(o,aDay/4,{r:t.r,g:t.g,b:t.b,ease:Linear.easeNone,onUpdate:function t(){e.skyColor=i,e.groundColor=o}})),g.add(TweenMax.to(o,aDay/4,{r:a.r,g:a.g,b:a.b,ease:Linear.easeNone,onUpdate:function t(){e.skyColor=i,e.groundColor=o}})),g.add(TweenMax.to(o,aDay/4,{r:n.r,g:n.g,b:n.b,ease:Linear.easeNone,onUpdate:function t(){e.skyColor=i,e.groundColor=o}})),g.add(TweenMax.to(o,aDay/4,{r:r.r,g:r.g,b:r.b,ease:Linear.easeNone,onUpdate:function t(){e.skyColor=i,e.groundColor=o}}));var h=new THREE.DirectionalLight(16711680,.1);h.position.set(500,-500,-200),h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=.5,h.shadow.camera.far=1e3,h.shadow.camera.left=-300,h.shadow.camera.right=300,h.shadow.camera.bottom=-300,h.shadow.camera.top=300;var p=new TimelineMax({repeat:1e4});p.add(TweenMax.to(i,aDay/4,{r:s.r,g:s.g,b:s.b,ease:Linear.easeNone,onUpdate:function e(){h.color=i}})),p.add(TweenMax.to(i,aDay/4,{r:d.r,g:d.g,b:d.b,ease:Linear.easeNone,onUpdate:function e(){h.color=i}})),p.add(TweenMax.to(i,aDay/4,{r:c.r,g:c.g,b:c.b,ease:Linear.easeNone,onUpdate:function e(){h.color=i}})),p.add(TweenMax.to(i,aDay/4,{r:l.r,g:l.g,b:l.b,ease:Linear.easeNone,onUpdate:function e(){h.color=i}})),TweenMax.to(h.position,aDay/2,{x:-500,repeat:1e5,yoyo:!0,ease:Power1.easeInOut,delay:aDay/4}),TweenMax.to(h.position,2*aDay,{z:200,repeat:1e5,yoyo:!0,ease:Sine.easeInOut}),TweenMax.to(h.position,aDay/2,{y:500,repeat:1e5,yoyo:!0,ease:Power1.easeInOut}),TweenMax.to(h,aDay/2,{intensity:1.2,repeat:1e5,yoyo:!0,ease:Sine.easeInOut}),TweenMax.to(e,aDay/2,{intensity:.5,repeat:1e5,yoyo:!0,ease:Sine.easeInOut}),scene.add(h)}function setOutline(){composer=new THREE.EffectComposer(renderer);var e=new THREE.RenderPass(scene,camera);composer.addPass(e),outlinePass=new THREE.OutlinePass(new THREE.Vector2(window.innerWidth,window.innerHeight),scene,camera),composer.addPass(outlinePass),(effectFXAA=new THREE.ShaderPass(THREE.FXAAShader)).uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),effectFXAA.renderToScreen=!0,composer.addPass(effectFXAA),outlinePass.edgeStrength=params1.edgeStrength,outlinePass.edgeGlow=params1.edgeGlow,outlinePass.edgeThickness=params1.edgeThickness,outlinePass.pulsePeriod=params1.pulsePeriod,outlinePass.visibleEdgeColor.set("#ffffff"),outlinePass.hiddenEdgeColor.set("#000000"),outlinePass.selectedObjects=[objs.island]}function setCar(){objs.car.position.set(0,0,0),objs.car.scale.set(.1,.1,.1),objs.car.castShadow=!0,objs.car.receiveShadow=!0,objs.car_wheel.scale.set(.1,.1,.1),objs.car_wheel.castShadow=!0,carC.add(objs.car,objs.car_wheel),scene.add(carC),carC.position.set(-60,5,130),carC.scale.set(.4,.4,.4),objs.car.material.emissive=new THREE.Color(16777215),objs.car.material.flatShading=!0,objs.car_wheel.scale.set(.1,.1,.1),objs.car_wheel.castShadow=!0,TweenMax.to(objs.car.position,.2,{y:.8,repeat:1e4,yoyo:!0}),TweenMax.to(objs.car.scale,.2,{z:.095,repeat:1e4,yoyo:!0,delay:.3}),setCarLight(),moveCar()}function setCarLight(){var e=new THREE.SpotLight(16777096);e.angle=Math.PI/180*30,e.distance=60,e.intensity=2,e.position.set(0,10,15);var o=new THREE.Object3D;o.position.set(0,7.5,25),e.target=o,carC.add(o,e)}function moveCar(){var e=new TimelineMax({repeat:1e4,delay:0});carC.position.set(carPath[0][0],carPath[0][1],carPath[0][2]),carLastPos.copy(carC.position),e.add(TweenMax.to(carC.position,2,{}));for(var o=0;o<carPath.length-1;o++){var t,a=new THREE.Vector3(carPath[o][0],carPath[o][1],carPath[o][2]),n=new THREE.Vector3(carPath[o+1][0],carPath[o+1][1],carPath[o+1][2]);t=a.distanceTo(n)/carSpeed,e.add(TweenMax.to(carC.position,t,{x:carPath[o+1][0],y:carPath[o+1][1],z:carPath[o+1][2],ease:Linear.easeNone,onUpdate:function e(){if(carLastPos.x==carC.position.x&&carLastPos.y==carC.position.y&&carLastPos.z==carC.position.z);else{var o=new THREE.Vector3(2*carC.position.x-1*carLastPos.x,2*carC.position.y-1*carLastPos.y,2*carC.position.z-1*carLastPos.z),t=carC.quaternion.clone();carC.lookAt(o);var a=carC.quaternion.clone();carC.quaternion.slerp(t,.92),carLastPos.copy(carC.position)}}}))}}function setCloud(){scene.add(cloudC),addACloud(150*_far,250,144*_far,100*_far,-100*_far,"img/cloud/cloud000.png"),addACloud(0*_far,210,-180*_far,60*_far,60*_far,"img/cloud/cloud001.png"),addACloud(-150*_far,230,144*_far,80*_far,80*_far,"img/cloud/cloud002.png")}function addACloud(e,o,t,a,n,r){var i=(new THREE.TextureLoader).load(r),s=new THREE.SpriteMaterial({map:i,color:10066329}),d=new THREE.Sprite(s);cloudC.add(d);var c=new THREE.Color(10066329),l=new THREE.Color(16777215);TweenMax.to(c,aDay/2,{r:l.r,g:l.g,b:l.b,ease:Sine.easeInOut,repeat:1e4,yoyo:!0,onUpdate:function e(){d.material.color=c}}),d.scale.set(1.3*a,1.3*n,1),d.position.set(e-50,o,t),TweenMax.to(d.position,3,{y:"-=40",repeat:1e4,yoyo:!0,ease:Sine.easeInOut,delay:3*Math.random()})}function updateCloud(){var e=clock.getDelta();cloudAni.update(1e3*e)}function TextureAnimator(e,o,t,a,n){this.tilesHorizontal=o,this.tilesVertical=t,this.numberOfTiles=a,e.wrapS=e.wrapT=THREE.RepeatWrapping,e.repeat.set(1/this.tilesHorizontal,1/this.tilesVertical),this.tileDisplayDuration=n,this.currentDisplayTime=0,this.currentTile=0,this.update=function(o){for(this.currentDisplayTime+=o;this.currentDisplayTime>this.tileDisplayDuration;){this.currentDisplayTime-=this.tileDisplayDuration,this.currentTile++,this.currentTile==this.numberOfTiles&&(this.currentTile=0);var t=this.currentTile%this.tilesHorizontal;e.offset.x=t/this.tilesHorizontal;var a=Math.floor(this.currentTile/this.tilesHorizontal);e.offset.y=a/this.tilesVertical}}}function iniListenSound(){document.addEventListener("WeixinJSBridgeReady",function(){bgm.play()},!1)}function initAll(){renderer.setClearColor(6798302),renderer.setSize(window.innerWidth,window.innerHeight),renderer.shadowMap.type=THREE.BasicShadowMap,renderer.setPixelRatio(2),renderer.shadowMapEnabled=!0,renderer.gammaInput=!0,renderer.gammaOutput=!0,console.log("==========toneMapping",renderer.toneMapping),document.body.appendChild(renderer.domElement),loadingMods("mod/car.gltf",["car"]),loadingMods("mod/car_wheel.gltf",["car_wheel"]),loadingMods("mod/waterfall.gltf",["waterfall"]),loadingMods("mod/fire.gltf",["fire"]),loadingMods("mod/island.gltf",["island"]),loadingMods("mod/trees1.gltf",["trees1"],"addScene"),clickFunc()}function animate(){requestAnimationFrame(animate),render()}function render(){renderer.render(scene,camera)}function setTest(){controls=new THREE.OrbitControls(camera,renderer.domElement),guiControls=new function(){this.X=0,this.Y=150,this.Z=0,this.ifTrue=!0,this.func=function(){console.log("一个函数")},this.target=rootPointBody}}function clickFunc(){document.addEventListener("touchstart",onDocumentTouchStart,!1),document.addEventListener("touchmove",onDocumentTouchMove,!1),document.addEventListener("touchend",onDocumentTouchEnd,!1)}function onDocumentTouchStart(e){mouse.x=e.touches[0].clientX/window.innerWidth*2-1,mouse.y=-e.touches[0].clientY/window.innerHeight*2+1,raycaster.setFromCamera(mouse,camera),intersects=[],raycaster.intersectObjects(meshes,!1,intersects),intersects.length>0&&console.log(intersects)}function onDocumentTouchMove(e){}function onDocumentTouchEnd(e){controls.enabled=!0}function loadingMods(e,o,t){var a;modNum++,(new THREE.GLTFLoader).load(e,function(e){modLoadedNum++,console.log(e.scene);for(var a=0;a<e.scene.children.length;a++)objs[o[a]]=e.scene.children[a],t&&scene.add(objs[o[a]]),console.log(o[a]);loadingCheck()},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened",e)})}function loadingCheck(){modNum==modLoadedNum?(console.log("模型加载完成",modLoadedNum,"/",modNum),setTest(),ModLoaded()):console.log("模型加载中",modLoadedNum,"/",modNum)}function ModLoaded(){getStart()}function getStart(){console.log("getStart!"),camera.position.set(400,100,400),camera.lookAt(scene.position),setFire(),setSun(),setCar(),setCloud(),objs.island.position.y=0,objs.island.scale.set(1.1,1.1,1.1),scene.add(objs.island);for(var e=0;e<objs.island.children.length;e++)objs.island.children[e].castShadow=!0,objs.island.children[e].receiveShadow=!0;objs.island.children[0].receiveShadow=!1,objs.island.children[0].material.side=THREE.DoubleSide,console.log(objs.island),objs.trees1.position.y=0,objs.trees1.scale.set(1.1,1.1,1.1),scene.add(objs.trees1);for(var e=0;e<objs.trees1.children.length;e++)objs.trees1.children[e].castShadow=!0,objs.trees1.children[e].material.side=THREE.DoubleSide;objs.waterfall.position.y=1,objs.waterfall.scale.set(1.1,1.1,1.1);var o=objs.waterfall.geometry,t=new THREE.Water(o,{color:params.color,scale:params.scale,flowDirection:new THREE.Vector2(params.flowX,params.flowY),textureWidth:128,textureHeight:128,reflectivity:.02});t.scale.set(1.1,1.1,1.1),scene.add(t);var a=new THREE.PlaneBufferGeometry(1500,1500),n=new THREE.Water(a,{color:params.color,scale:params.scale,flowDirection:new THREE.Vector2(params.flowX,params.flowY),textureWidth:512,textureHeight:512});n.position.y=1,n.rotation.x=-.5*Math.PI,scene.add(n),animate()}var sound,sound;Fog.prototype.isFog=!0,Fog.prototype.clone=function(){return new Fog(this.color,this.near,this.far)},Fog.prototype.toJSON=function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};var gifts=[],giftsNum=[1,3,5,7,9,16,20,50],gift1,gift2,gift3,gift4,nowGiftType=parseInt(4*Math.random()),giftScale=1.5,pigScale=.1,footLinearDamping=.2,handLinearDamping=.2,footAngularDamping=.2,handAngularDamping=.2,leftFoot,leftFootBody,leftFootJointBody,leftLegGeo,leftLegMat,leftLeg,rightFoot,rightFootBody,rightFootJointBody,rightLegGeo,rightLegMat,rightLeg,rightHand,rightHandBody,rightHandJointBody,rightArmGeo,rightArmMat,rightArm,leftHand,leftHandBody,leftHandJointBody,leftArmGeo,leftArmMat,leftArm,hanger,headLine,headLineGeo,headLineMat,line=new Float32Array,lines=[],lineMesh,container,stats,materialDepth,windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,postprocessing={enabled:!0},shaderSettings={rings:3,samples:2},mouse=new THREE.Vector2,raycaster=new THREE.Raycaster,distance=100,target=new THREE.Vector3(0,20,-50),effectController,planes=[],leaves=100,fire=new THREE.Group,aDay=8,composer,effectFXAA,outlinePass,params1={edgeStrength:10,edgeGlow:0,edgeThickness:2,pulsePeriod:0,rotate:!1,usePatternTexture:!1},selectedObjects=[],carC=new THREE.Group,carPath=[[42,114,14],[3,110,38],[-77,109,-7],[-37,73,-133],[24,46,-141],[100,49,-98],[115,26,87],[55,23,161],[9,11,182],[-27,4,171],[-59,4,178],[-82,4,171],[-82,5,142],[-41,4.5,138],[-27,4,171],[9,11,182],[55,23,161],[115,26,87],[100,49,-98],[24,46,-141],[-37,73,-133],[-77,109,-7],[3,110,38],[42,114,14]],carLastPos=new THREE.Vector3(0,0,0),lastLookat=new THREE.Vector3(0,0,0),carSpeed=50,cloudC=new THREE.Group,_far=.8,clock=new THREE.Clock,scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,2e4),renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!1}),modNum=0,modLoadedNum=0,objs={},stats=null,world=new CANNON.World,rootPoint,rootPointBody,carShape,carBody;window.onload=function e(){loadWechatConfig(),initAll(),iniListenSound(),wx.ready(function(){var e;return e={title:"岛 - 薄荷犀牛",desc:"岛屿夏云起，汀洲芳草深。",link:"https://m.giccoo.com/findsheep/",imgUrl:"img/ico.jpg",success:function e(){},cancel:function e(){}},wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})};var loadWechatConfig=function e(){var o,t,a;a=encodeURIComponent(window.location.href.split("#")[0]),
(o=document.createElement("script")).src="//api.giccoo.com/api/config?url="+a,(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(o,t)},ifbgm=0,bgm=document.getElementById("bgm"),cannonDebugRenderer=new THREE.CannonDebugRenderer(scene,world),controls,guiControls,datGUI,raycaster=new THREE.Raycaster,mouse=new THREE.Vector2,intersects=[],mouseConstraint=void 0,meshes=[],bodies=[],params={color:"#67bbde",scale:.8,flowX:-1,flowY:-.5};