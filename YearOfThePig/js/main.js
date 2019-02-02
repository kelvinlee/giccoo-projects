"use strict";function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function setMeshPhy(e,t,n){
//console.log(_mesh.geometry.attributes)
n||(n=1);var o=e.geometry.attributes.position.array,i=[],a;for(a=0;a<e.geometry.attributes.position.array.length;a+=3)i.push(new CANNON.Vec3(o[a]*n,o[a+1]*n,o[a+2]*n));//var _meshShape = new CANNON.ConvexPolyhedron(verts);
var r=new THREE.Geometry;r.fromBufferGeometry(e.geometry);var s=new CANNON.ConvexPolyhedron(i,r.face);t.addShape(s)}function vec3toVector3(e){var t;return new THREE.Vector3(e.x,e.y,e.z);// @codekit-append "../js/phy.js"
// @codekit-append "../js/Fog.js"
// @codekit-append "../js/gift.js"
// @codekit-append "../js/ani.js"
// @codekit-append "../js/pig.js"
// @codekit-append "../js/build.js"
}// import { Color } from '../math/Color.js';
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
function Fog(e,t,n){this.name="",this.color=new Color(e),this.near=void 0!==t?t:1,this.far=void 0!==n?n:1e3}function setGifts(){
//=====硬币
gift1=objs.gift1.clone();var e=objs.gift1.material.map,t=new THREE.MeshToonMaterial({color:15642689,emissive:15642689,emissiveIntensity:.1});//console.log(pig.material.map)
//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
//var pigMat=new THREE.MeshToonMaterial({map:pigmap,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
gift1.material=t,//TweenMax.to(gift1.material,.5,{emissiveIntensity:0.05,repeat:1000000,yoyo:true})
//=====金条
gift2=objs.gift2.clone();var n=objs.gift2.material.map,o=new THREE.MeshToonMaterial({color:15910477,emissive:15910477,emissiveIntensity:.1});//console.log(pig.material.map)
//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
//var pigMat=new THREE.MeshToonMaterial({map:pigmap,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
gift2.material=o,//TweenMax.to(gift2.material,.5,{emissiveIntensity:0.05,repeat:1000000,yoyo:true})
//=====元宝
gift3=objs.gift3.clone();var i=objs.gift3.material.map,a=new THREE.MeshToonMaterial({color:15910477,emissive:15910477,emissiveIntensity:.1});//console.log(pig.material.map)
//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
//var pigMat=new THREE.MeshToonMaterial({map:pigmap,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
gift3.material=a,//TweenMax.to(gift3.material,.5,{emissiveIntensity:0.05,repeat:1000000,yoyo:true})
//=====红包
gift4=objs.gift4.clone();var r=objs.gift4.material.map,s=new THREE.MeshBasicMaterial({map:r,reflectivity:0});//console.log(pig.material.map)
//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
//var pigMat=new THREE.MeshToonMaterial({map:pigmap,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
gift4.material=s}function addGift(){if(console.log("加个礼物"),7==level){for(var e=0;e<giftsNum[level];e++)setTimeout(addAGift,30*e);removeJointConstraint(),renderer.domElement.removeEventListener("touchstart",onDocumentTouchStart,!1),renderer.domElement.removeEventListener("touchmove",onDocumentTouchMove,{passive:!1}),renderer.domElement.removeEventListener("touchend",onDocumentTouchEnd,!1),TweenMax.to(rootPointBody.position,2.5,{y:120,onComplete:moveCamera}),SOUND.end(),main.gameOver()}else{for(var e=0;e<giftsNum[level];e++)setTimeout(addAGift,60*e);main.runGift()}removeJointConstraint()}function moveCamera(){TweenMax.to(camera.position,3,{y:25,ease:Power2.easeInOut,onUpdate:function e(t){camera.updateProjectionMatrix()}}),TweenMax.to(camera,3,{zoom:.8,ease:Power2.easeInOut,onUpdate:function e(t){camera.updateProjectionMatrix()}})}function addAGift(){
// if(sound.isPlaying){
// 	sound.stop();
// }
// sound.play();
var e=nowGiftType;4==++nowGiftType&&(nowGiftType=0);var t,n=[gift1,gift2,gift3,gift4][e].clone();switch(//Math.random()*4
n.scale.set(.1*giftScale,.1*giftScale,.1*giftScale),n.castShadow=!0,//_agift.receiveShadow=true
scene.add(n),meshes.push(n),TweenMax.from(n.scale,2,{x:.01,y:.01,z:.01,ease:Elastic.easeOut}),e){case 0:var o=new CANNON.Cylinder(3*giftScale,3*giftScale,.5*giftScale,12);//硬币
break;case 1:var o=new CANNON.Sphere(2.5*giftScale);//元宝
break;case 2:var o=new CANNON.Box(new CANNON.Vec3(4.5*giftScale,1.3*giftScale,1.5*giftScale));//金条
break;case 3:var o=new CANNON.Box(new CANNON.Vec3(3*giftScale,4.5*giftScale,.5*giftScale));//红包
break}var i=new CANNON.Body({mass:10,position:new CANNON.Vec3(0,0,0)});//type:CANNON.Body.KINEMATIC
i.addShape(o),n.userData.body=i,n.userData.isGift=!0,i.position.set(pigBody.position.x,pigBody.position.y-20,pigBody.position.z),i.angularVelocity=new CANNON.Vec3(4*Math.random()-2,4*Math.random()-2,4*Math.random()-2),//随机旋转
i.velocity=new CANNON.Vec3(4*Math.random()-2,4*Math.random()-2,4*Math.random()-2),//随机速度
world.add(i),bodies.push(i),SOUND.gift.play(),main.shaked=!0}function aniDone(){console.log("完成")}function setLeftFoot(){leftFoot=objs.foot.clone(),scene.add(leftFoot),leftFoot.scale.set(pigScale,pigScale,pigScale),leftFoot.position.set(0,0,0),leftFoot.castShadow=!0;var e=objs.foot.material.map,t=new THREE.MeshBasicMaterial({map:e});leftFoot.material=t;var n=new THREE.BoxGeometry(1,1,1),o=new THREE.MeshBasicMaterial({color:16776960});leftFootJoint=new THREE.Mesh(n,o),//scene.add(leftFootJoint)
setLeftFootPhy()}//leftFootCurve
function setLeftFootPhy(){
//=====左脚
leftFootShap=new CANNON.Sphere(20*pigScale),//=====加物理外形
leftFootBody=new CANNON.Body({mass:5,position:new CANNON.Vec3(20*pigScale,0,0),shape:leftFootShap,linearDamping:footLinearDamping,angularDamping:footAngularDamping}),world.add(leftFootBody),meshes.push(leftFoot),bodies.push(leftFootBody),leftFoot.userData.body=leftFootBody,//=====左膝盖
leftFootJointBody=new CANNON.Body({mass:1,position:new CANNON.Vec3(20*pigScale,50*pigScale,10*pigScale),linearDamping:footLinearDamping,angularDamping:footAngularDamping}),world.add(leftFootJointBody),meshes.push(leftFootJoint),bodies.push(leftFootJointBody);//=====膝盖链接身子
//var leftFootJoint_bodyConstraint = new CANNON.PointToPointConstraint(leftFootJointBody, new CANNON.Vec3(0,0,0), pigBody, new CANNON.Vec3(20*pigScale,-114.6146*pigScale/1.2,30*pigScale),100);
var e=new CANNON.ConeTwistConstraint(leftFootJointBody,pigBody,{pivotA:new CANNON.Vec3(0,0,0),pivotB:new CANNON.Vec3(20*pigScale,-114.6146*pigScale/1.2,30*pigScale),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(e);//=====脚链接膝盖
//var foot_leftFootJointConstraint = new CANNON.PointToPointConstraint(leftFootBody, new CANNON.Vec3(0,50*pigScale/1.2,0), leftFootJointBody, new CANNON.Vec3(0,0,0),100);
var t=new CANNON.ConeTwistConstraint(leftFootBody,leftFootJointBody,{pivotA:new CANNON.Vec3(0,50*pigScale/1.2,0),pivotB:new CANNON.Vec3(0,0,0),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(t),//=====画线
leftFootCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)]),(leftLegGeo=new THREE.TubeBufferGeometry(leftFootCurve,20,3*pigScale,8,!1)).attributes.position.needsUpdate=!0,leftLegMat=new THREE.MeshBasicMaterial({color:15775419}),leftLeg=new THREE.Mesh(leftLegGeo,leftLegMat),scene.add(leftLeg)}//====================================右脚
function setRightFoot(){rightFoot=objs.foot.clone(),scene.add(rightFoot),rightFoot.scale.set(pigScale,pigScale,pigScale),rightFoot.position.set(0,0,0),rightFoot.castShadow=!0;var e=rightFoot.material.map,t=new THREE.MeshBasicMaterial({map:e});rightFoot.material=t;var n=new THREE.BoxGeometry(1,1,1),o=new THREE.MeshBasicMaterial({color:16776960});rightFootJoint=new THREE.Mesh(n,o),//scene.add(rightFootJoint)
setRightFootPhy()}//rightFootCurve
function setRightFootPhy(){
//=====右脚
rightFootShap=new CANNON.Sphere(20*pigScale),//=====加物理外形
rightFootBody=new CANNON.Body({mass:5,position:new CANNON.Vec3(-20*pigScale,0,0),shape:rightFootShap,linearDamping:footLinearDamping,angularDamping:footAngularDamping}),console.log(rightFootBody.linearDamping),world.add(rightFootBody),meshes.push(rightFoot),bodies.push(rightFootBody),rightFoot.userData.body=rightFootBody,//=====右膝盖
rightFootJointBody=new CANNON.Body({mass:1,position:new CANNON.Vec3(-20*pigScale,50*pigScale,30*pigScale),linearDamping:footLinearDamping,angularDamping:footAngularDamping}),world.add(rightFootJointBody),meshes.push(rightFootJoint),bodies.push(rightFootJointBody);//=====膝盖链接身子
var e=new CANNON.ConeTwistConstraint(rightFootJointBody,pigBody,{pivotA:new CANNON.Vec3(0,0,0),pivotB:new CANNON.Vec3(-20*pigScale,-114.6146*pigScale/1.2,30*pigScale),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(e);//=====脚链接膝盖
var t=new CANNON.ConeTwistConstraint(rightFootBody,rightFootJointBody,{pivotA:new CANNON.Vec3(0,50*pigScale/1.2,0),pivotB:new CANNON.Vec3(0,0,0),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(t),//=====画线
rightFootCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)]),(rightLegGeo=new THREE.TubeBufferGeometry(rightFootCurve,20,3*pigScale,8,!1)).attributes.position.needsUpdate=!0,rightLegMat=new THREE.MeshBasicMaterial({color:15775419}),rightLeg=new THREE.Mesh(rightLegGeo,rightLegMat),scene.add(rightLeg)}//====================================右手
function setRightHand(){rightHand=objs.foot.clone(),scene.add(rightHand),rightHand.scale.set(pigScale,pigScale,pigScale),rightHand.position.set(0,0,0),rightHand.castShadow=!0;var e=rightHand.material.map,t=new THREE.MeshBasicMaterial({map:e});rightHand.material=t;var n=new THREE.BoxGeometry(1,1,1),o=new THREE.MeshBasicMaterial({color:16776960});rightHandJoint=new THREE.Mesh(n,o),//scene.add(rightHandJoint)
setRightHandPhy()}//rightHandCurve
function setRightHandPhy(){
//=====右手
rightHandShap=new CANNON.Sphere(20*pigScale),//=====加物理外形
rightHandBody=new CANNON.Body({mass:5,position:new CANNON.Vec3(-20*pigScale,0,0),shape:rightHandShap,linearDamping:handLinearDamping,angularDamping:handAngularDamping}),world.add(rightHandBody),meshes.push(rightHand),bodies.push(rightHandBody),rightHand.userData.body=rightHandBody,//=====右肘
rightHandJointBody=new CANNON.Body({mass:1,position:new CANNON.Vec3(-20*pigScale,50*pigScale,30*pigScale),linearDamping:handLinearDamping,angularDamping:handAngularDamping}),world.add(rightHandJointBody),meshes.push(rightHandJoint),bodies.push(rightHandJointBody);//=====肘链接身子
var e=new CANNON.ConeTwistConstraint(rightHandJointBody,pigBody,{pivotA:new CANNON.Vec3(0,0,0),pivotB:new CANNON.Vec3(-60*pigScale,-60*pigScale/1.5,10*pigScale),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(e);//=====手链接肘
var t=new CANNON.ConeTwistConstraint(rightHandBody,rightHandJointBody,{pivotA:new CANNON.Vec3(0,50*pigScale/1.5,0),pivotB:new CANNON.Vec3(0,0,0),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(t),//=====画线
rightHandCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)]),(rightArmGeo=new THREE.TubeBufferGeometry(rightHandCurve,20,3*pigScale,8,!1)).attributes.position.needsUpdate=!0,rightArmMat=new THREE.MeshBasicMaterial({color:15775419}),rightArm=new THREE.Mesh(rightArmGeo,rightArmMat),scene.add(rightArm)}//====================================左手
function setLeftHand(){leftHand=objs.foot.clone(),scene.add(leftHand),leftHand.scale.set(pigScale,pigScale,pigScale),leftHand.position.set(0,0,0),leftHand.castShandow=!0;var e=leftHand.material.map,t=new THREE.MeshBasicMaterial({map:e});leftHand.material=t;var n=new THREE.BoxGeometry(1,1,1),o=new THREE.MeshBasicMaterial({color:16776960});leftHandJoint=new THREE.Mesh(n,o),//scene.add(leftHandJoint)
setLeftHandPhy()}//leftHandCurve
function setLeftHandPhy(){
//=====左手
leftHandShap=new CANNON.Sphere(20*pigScale),//=====加物理外形
leftHandBody=new CANNON.Body({mass:5,position:new CANNON.Vec3(20*pigScale,0,0),shape:leftHandShap,linearDamping:handLinearDamping,angularDamping:handAngularDamping}),leftHand.castShadow=!0,world.add(leftHandBody),meshes.push(leftHand),bodies.push(leftHandBody),leftHand.userData.body=leftHandBody,//=====左肘
leftHandJointBody=new CANNON.Body({mass:1,position:new CANNON.Vec3(20*pigScale,50*pigScale,30*pigScale),linearDamping:handLinearDamping,angularDamping:handAngularDamping}),world.add(leftHandJointBody),meshes.push(leftHandJoint),bodies.push(leftHandJointBody);//=====肘链接身子
var e=new CANNON.ConeTwistConstraint(leftHandJointBody,pigBody,{pivotA:new CANNON.Vec3(0,0,0),pivotB:new CANNON.Vec3(60*pigScale,-60*pigScale/1.5,10*pigScale),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(e);//=====手链接肘
var t=new CANNON.ConeTwistConstraint(leftHandBody,leftHandJointBody,{pivotA:new CANNON.Vec3(0,50*pigScale/1.5,0),pivotB:new CANNON.Vec3(0,0,0),axisA:CANNON.Vec3.UNIT_Y,axisB:CANNON.Vec3.UNIT_Y,angle:Math.PI/100,twistAngle:0,maxForce:1e100});world.addConstraint(t),//=====画线
leftHandCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0)]),(leftArmGeo=new THREE.TubeBufferGeometry(leftHandCurve,20,3*pigScale,8,!1)).attributes.position.needsUpdate=!0,leftArmMat=new THREE.MeshBasicMaterial({color:15775419}),//
leftArm=new THREE.Mesh(leftArmGeo,leftArmMat),//leftArm.castShadow=true
scene.add(leftArm)}//====================================头顶线
function setHeadLine(){}//hanger=new THREE.Vector3(0,100,0)
//headLineGeo.verticesNeedUpdate=true
//headLineGeo.vertices.push(hanger)
//headLineGeo.vertices.push(objs.pig.position)//=[hanger,objs.pig.position]
//line = new Float32Array();
//line=[0,100,0,objs.pig.position.x,objs.pig.position.y,objs.pig.position.z]
//makeLine( line, 0xff0000 );
//lines.push()
//==========手脚连线渲染
function updateArmLegs(){
//pigBody.quaternion.vmult(pigBody.position.vsub(new CANNON.Vec3(0,100,0)))
pigBody.quaternion.inverse();//=====左脚
var e=pigBody.quaternion.vmult(new CANNON.Vec3(20*pigScale,-90*pigScale,30*pigScale)).vadd(pigBody.position);leftFootCurve=new THREE.CatmullRomCurve3([vec3toVector3(e),vec3toVector3(leftFootJointBody.position),vec3toVector3(leftFootBody.position)]),leftLegGeo.copy(new THREE.TubeBufferGeometry(leftFootCurve,20,15*pigScale,8,!1));//=====右脚
var t=pigBody.quaternion.vmult(new CANNON.Vec3(-20*pigScale,-90*pigScale,30*pigScale)).vadd(pigBody.position);rightFootCurve=new THREE.CatmullRomCurve3([vec3toVector3(t),vec3toVector3(rightFootJointBody.position),vec3toVector3(rightFootBody.position)]),rightLegGeo.copy(new THREE.TubeBufferGeometry(rightFootCurve,20,15*pigScale,8,!1));//=====右手
var n=pigBody.quaternion.vmult(new CANNON.Vec3(-30*pigScale,-30*pigScale,30*pigScale)).vadd(pigBody.position);rightHandCurve=new THREE.CatmullRomCurve3([vec3toVector3(n),vec3toVector3(rightHandJointBody.position),vec3toVector3(rightHandBody.position)]),rightArmGeo.copy(new THREE.TubeBufferGeometry(rightHandCurve,20,15*pigScale,8,!1));//=====左手
var o=pigBody.quaternion.vmult(new CANNON.Vec3(30*pigScale,-30*pigScale,30*pigScale)).vadd(pigBody.position);leftHandCurve=new THREE.CatmullRomCurve3([vec3toVector3(o),vec3toVector3(leftHandJointBody.position),vec3toVector3(leftHandBody.position)]),leftArmGeo.copy(new THREE.TubeBufferGeometry(leftHandCurve,20,15*pigScale,8,!1));//=====头顶线
var i=new THREE.Vector3(0,9,.4);i.applyQuaternion(objs.pig.quaternion),i=i.addVectors(i,objs.pig.position),scene.remove(lines[0]),lines=[],makeLine(line=[0,100,0,i.x,i.y,i.z],16435024),//=====眼镜跟随
eyeGroup.position.copy(objs.pig.position),eyeGroup.quaternion.copy(objs.pig.quaternion)}function makeLine(e,t){var n=new MeshLine;n.setGeometry(e);var o=new MeshLineMaterial({useMap:!1,color:t,opacity:1,sizeAttenuation:!0,lineWidth:.005,near:camera.near,far:camera.far});lineMesh=new THREE.Mesh(n.geometry,o),scene.add(lineMesh),lines.push(lineMesh)}function initAll(){if(1==ifFirsTime)//set_envMap()
return ifFirsTime=!1,console.log("啦啦啦啦啦"),renderer.setClearColor(16774608),//设置背景颜色
renderer.setSize(window.innerWidth,window.innerHeight),//设置宽高
renderer.shadowMap.type=THREE.PCFSoftShadowMap,//.BasicShadowMap.PCFShadowMap.PCFSoftShadowMap
renderer.setPixelRatio(2),renderer.shadowMapEnabled=!0,//renderer.shadowMapSoft=true
// document.body.appendChild()
loadingMods("mod/pig4.glb",["pig"],"addScene"),//模型加载
loadingMods("mod/foot.glb",["foot"]),//模型加载
loadingMods("mod/gift1.glb",["gift1"]),loadingMods("mod/gift2.glb",["gift2"]),loadingMods("mod/gift3.glb",["gift3"]),loadingMods("mod/gift4.glb",["gift4"]),//render()
//animate()//===动画
clickFunc(),renderer.domElement}//============================每帧渲染：更新物理+画面
function animate(){stats.begin(),requestAnimationFrame(animate),updatePhysics(),render(),stats.end()}function updatePhysics(){world.step(.05);for(var e=0;e!==meshes.length;e++)meshes[e].position.copy(bodies[e].position),//========meshes[]里放THREE模型，bodies[]里放物理CANNON的 body模型
meshes[e].quaternion.copy(bodies[e].quaternion);//cannonDebugRenderer.update()//======物理线框Gird
}function render(){updateArmLegs(),renderer.render(scene,camera)}//============================环境贴图
// var environment
// function set_envMap(){
// 	environment = new THREE.CubeTextureLoader()
// 	.setPath( 'img/' )
// 	.load( [
// 		'px.jpg',
// 		'nx.jpg',
// 		'py.jpg',
// 		'ny.jpg',
// 		'pz.jpg',
// 		'nz.jpg'
// 	] );
// }
//============================OrbitControls/datGUI 测试设置
function setTest(){
//====OrbitControls
(controls=new THREE.OrbitControls(camera,renderer.domElement)).enabled=!1,(// //====stats.js 性能测试
stats=new Stats).showPanel(1),// 0: fps, 1: ms, 2: mb, 3+: custom
// console.log(stats);
document.body.appendChild(stats.domElement),stats.domElement.className="fps",//====datGUI
guiControls=new function(){
//存放有所有需要改变的属性的对象
this.X=0,this.Y=150,this.Z=0,this.ifTrue=!0,this.func=function(){console.log("一个函数")},this.target=rootPointBody}}//============================互动 点击
function clickFunc(){renderer.domElement.addEventListener("touchstart",onDocumentTouchStart,!1),renderer.domElement.addEventListener("touchmove",onDocumentTouchMove,{passive:!1}),renderer.domElement.addEventListener("touchend",onDocumentTouchEnd,!1)}function onDocumentTouchStart(e){if(e.preventDefault(),mouse.x=e.touches[0].clientX/window.innerWidth*2-1,mouse.y=-e.touches[0].clientY/window.innerHeight*2+1,//donElement
raycaster.setFromCamera(mouse,camera),intersects=[],//intersects = raycaster.intersectObjects( scene.children )
raycaster.intersectObjects(meshes,!1,intersects),0<intersects.length){
//console.log(intersects[0])
//console.log(intersects[0].object)
// if(intersects[0].object==objs.pig){
// 	// TweenMax.set(objs.pig.rotation,{x:Math.PI/180*Math.random()*360,y:Math.PI/180*Math.random()*360,z:Math.PI/180*Math.random()*360})
// 	// TweenMax.set(objs.pig.position,{y:20})
// 	// TweenMax.to(objs.pig.rotation,2,{x:Math.PI/2,y:0,z:0,ease:Elastic.easeOut})
// 	// TweenMax.to(objs.pig.position,2,{x:0,y:20,z:0,ease:Bounce.easeOut})
// }
//world.removeConstraint(body_rootConstraint);
//world.gravity.set(0,0,0)
lastX=e.touches[0].clientX,lastY=e.touches[0].clientY,console.log("intersects[0].object.userData.body",intersects[0].object.userData.body);var t=intersects[0].object.userData.body;if(!t)return;if(!intersects[0].object.userData.isGift){controls.enabled=!1;var n=t.position;return pickingPlane.position.copy(n),pickingPlane.quaternion.copy(camera.quaternion),addMouseConstraint(n.x,n.y,n.z,t),eyeBlink(),void SOUND.runRandomHit()}t.angularVelocity=new CANNON.Vec3(4*Math.random()-2,4*Math.random()-2,4*Math.random()-2),//随机旋转
t.velocity=new CANNON.Vec3(20*Math.random()-10,30*Math.random(),45*-Math.random())}}function onDocumentTouchMove(e){//donElement
if(e.preventDefault(),mouse.x=e.touches[0].clientX/window.innerWidth*2-1,mouse.y=-e.touches[0].clientY/window.innerHeight*2+1,mouseConstraint){var t=e.touches[0].clientX-lastX,n=e.touches[0].clientY-lastY,o=t<0?-1:1,i=n<0?-1:1;//console.log(pickingPlane)
if(Math.abs(t)>=MIN_DISTANCE_PER_SHAKE&&0!==o&&lastDirX!==o&&(lastDirX=o,entropy+=ENTROPY_PER_SHAKE),Math.abs(n)>=MIN_DISTANCE_PER_SHAKE&&0!==i&&lastDirY!==i&&(lastDirY=i,entropy+=ENTROPY_PER_SHAKE),lastX=e.touches[0].clientX,lastY=e.touches[0].clientY,// if (this.entropy > HIDE_HINT_ENTROPY) {
//     this.hideHint();
// }
8==level?aniDone():entropy>MAX_ENTROPY[level]&&(addGift(),entropy=0,level++),raycaster.setFromCamera(mouse,camera),intersects.length=0,raycaster.intersectObject(pickingPlane,!1,intersects),intersects.length){var a=intersects[0].point;//this.dust.emitter && (this.dust.emitter.position.value = pos);
moveJointToPoint(a.x,a.y,a.z)}return!1}}function onDocumentTouchEnd(e){controls.enabled=!1,removeJointConstraint()}function removeJointConstraint(){world.removeConstraint(mouseConstraint),mouseConstraint=!1,leftFootBody.linearDamping=rightFootBody.linearDamping=leftFootJointBody.linearDamping=rightFootJointBody.linearDamping=footLinearDamping,leftHandBody.linearDamping=rightHandBody.linearDamping=leftHandJointBody.linearDamping=rightHandJointBody.linearDamping=handLinearDamping,leftFootBody.angularDamping=rightFootBody.angularDamping=leftFootJointBody.angularDamping=rightFootJointBody.angularDamping=footAngularDamping,leftHandBody.angularDamping=rightHandBody.angularDamping=leftHandJointBody.angularDamping=rightHandJointBody.angularDamping=handAngularDamping}function moveJointToPoint(e,t,n){t=Math.max(-20,t),jointBody.position.set(e,t,n),mouseConstraint&&mouseConstraint.update()}function addMouseConstraint(e,t,n,o){var i=o,a=new CANNON.Vec3(e,t,n).vsub(i.position),r,s=i.quaternion.inverse().vmult(a);jointBody.position.set(e,t,n),mouseConstraint=new CANNON.PointToPointConstraint(i,s,jointBody,new CANNON.Vec3(0,0,0),800),//mouseConstraint = new CANNON.PointToPointConstraint(constrainedBody, new CANNON.Vec3(0, 0, 0), jointBody, new CANNON.Vec3(0, 0, 0), 800);
world.addConstraint(mouseConstraint),leftFootBody.linearDamping=leftFootBody.angularDamping=0,rightFootBody.linearDamping=rightFootBody.angularDamping=0,leftHandBody.linearDamping=leftHandBody.angularDamping=0,rightHandBody.linearDamping=rightHandBody.angularDamping=0,leftFootJointBody.linearDamping=leftFootJointBody.angularDamping=0,rightFootJointBody.linearDamping=rightFootJointBody.angularDamping=0,leftHandJointBody.linearDamping=leftHandJointBody.angularDamping=0,rightHandJointBody.linearDamping=rightHandJointBody.angularDamping=0}//============================模型加载函数 loadingMods('mod/pig2.glb',"pig")
function loadingMods(e,n,o){var t;modNum++,(new THREE.GLTFLoader).load(e,function(e){
// called when the resource is loaded
modLoadedNum++,console.log(e.scene);// objs[_target]=gltf.scene.children[0]
// if(_ifAddScene){
// 	scene.add(objs[_target])
// }
for(var t=0;t<e.scene.children.length;t++)objs[n[t]]=e.scene.children[t],o&&scene.add(objs[n[t]]),console.log(n[t]);loadingCheck()},// called while loading is progressing
function(e){console.log(e.loaded/e.total*100+"% loaded")},// called when loading has errors
function(e){console.log("An error happened",e)})}function loadingCheck(){loading.updateMax(modLoadedNum),modNum==modLoadedNum?console.log("模型加载完成",modLoadedNum,"/",modNum):console.log("模型加载中",modLoadedNum,"/",modNum)}function ModLoaded(){
//加载模型完成
1==ifFirsTime2&&(ifFirsTime2=!1,getStart())}//===========================开始
function getStart(){
// //====网格
// var grid=new THREE.GridHelper(50,10,0xffff00,0x888888)//网格辅助(格子尺寸，格子细分数，中线颜色，网格线颜色)
// scene.add(grid)
// //====坐标轴
// var axes = new THREE.AxesHelper(10);//轴辅助
// scene.add(axes)
scene.fog=new THREE.Fog(16774608,80,180);//====立方体
var e=new THREE.BoxGeometry(1,1,1),t=new THREE.MeshBasicMaterial({color:16776960});rootPoint=new THREE.Mesh(e,t);//scene.add(rootPoint)
// ====环境光
var n=new THREE.AmbientLight(16777215,.7);scene.add(n);//====平行光
var o=new THREE.DirectionalLight(16777215,.3);o.position.set(0,30,0),//dLight.target=scene
o.castShadow=!0,o.shadow.mapSize.width=2048,// default
o.shadow.mapSize.height=2048,// default
o.shadow.camera.near=.5,// default
o.shadow.camera.far=1e3,// default
o.shadow.camera.left=-100,// default
o.shadow.camera.right=100,o.shadow.camera.bottom=-100,// default
o.shadow.camera.top=100,// TweenMax.to(dLight.position,2,{x:100,repeat:100000,yoyo:true,ease:Sine.easeInOut,delay:1})//光源旋转
// TweenMax.to(dLight.position,2,{z:100,repeat:100000,yoyo:true,ease:Sine.easeInOut})
scene.add(o);//====平面
var i=new THREE.PlaneGeometry(600,600,60),a=new THREE.MeshLambertMaterial({color:16774608}),r=new THREE.Mesh(i,a);r.rotation.x=-Math.PI/2,r.position.y=-20,r.receiveShadow=!0,scene.add(r),//====摄像机
camera.position.set(0,10,60),//camera.lookAt(scene.position)
camera.lookAt(new THREE.Vector3(0,5,0)),//====猪位置
objs.pig.position.y=10,objs.pig.scale.set(.1,.1,.1),objs.pig.castShadow=!0,//====猪眼
scene.add(eyeGroup);var s=new THREE.SphereGeometry(1.2,12,12),l=new THREE.SphereGeometry(.5,12,12);eye1=new THREE.Mesh(s,new THREE.MeshBasicMaterial({color:16777215})),eye2=new THREE.Mesh(s,new THREE.MeshBasicMaterial({color:16777215})),eye3=new THREE.Mesh(l,new THREE.MeshBasicMaterial({color:0})),eye4=new THREE.Mesh(l,new THREE.MeshBasicMaterial({color:0})),eyeGroup.add(eye1,eye2,eye3,eye4),eye1.scale.y=.7,eye2.scale.y=.7,eye1.position.set(-3,1.6,6),eye2.position.set(3,1.6,6),eye3.scale.y=.7,eye4.scale.y=.7,eye3.scale.z=.3,eye4.scale.z=.3,eye3.position.set(-3,1.8,7.1),eye4.position.set(3,1.8,7.1);var d=objs.pig.material.map,c=new THREE.MeshBasicMaterial({map:d,reflectivity:0});//console.log(pig.material.map)
//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0.2})
//var pigMat=new THREE.MeshToonMaterial({map:pigmap,envMap:environment,reflectivity:0,shininess:10,specular:0xff3388})//normalMap:pigmap,normalMapType:THREE.ObjectSpaceNormalMap
//var pigMat=new THREE.MeshStandardMaterial({map:pigmap,emissive:0xffffff,envMap:environment,emissiveIntensity:0.5,roughness:0.4,metalness:.5})
objs.pig.material=c,//TweenMax.set(pig.scale,{x:.105,y:.105,z:.095})
//TweenMax.to(pig.scale,1.25,{x:.12,y:.12,z:.08,repeat:1000000,yoyo:true,ease:Sine.easeInOut})
addPickingPlane(),setPhy(),setLeftFoot(),setRightFoot(),setRightHand(),setLeftHand(),setHeadLine(),setGifts(),animate()}//======猪眨眼
function eyeBlink(){console.log("眨眼"),// eye1.material.color.set(0x000000)
// eye2.material.color.set(0x000000)
// setTimeout(function(){
// 	eye1.material.color.set(0xffffff)
// 	eye2.material.color.set(0xffffff)
// },80)
TweenMax.set(eye1.scale,{y:0}),TweenMax.set(eye2.scale,{y:0}),TweenMax.to(eye1.scale,.2,{y:.7}),TweenMax.to(eye2.scale,.2,{y:.7})}function addPickingPlane(){var e=new THREE.PlaneGeometry(4e3,2e3);pickingPlane=new THREE.Mesh(e,new THREE.MeshBasicMaterial({color:16711680,transparent:!0,opacity:0})),scene.add(pickingPlane)}//============================物理引擎
function setPhy(){
//====设置世界
world.gravity.set(0,-10,0),world.broadphase=new CANNON.NaiveBroadphase;//NaiveBroadphase
//====定义鼠标跟随点
var e=new CANNON.Sphere(.1);(jointBody=new CANNON.Body({mass:0})).addShape(e),jointBody.collisionFilterGroup=0,jointBody.collisionFilterMask=0,world.add(jointBody),//====总固定点
rootPointBody=new CANNON.Body({mass:0,position:new CANNON.Vec3(0,20,0)}),world.add(rootPointBody),meshes.push(rootPoint),bodies.push(rootPointBody);//====猪
var t=new CANNON.Sphere(8);pigBody=new CANNON.Body({mass:5,position:new CANNON.Vec3(0,20,0),shape:t}),//setMeshPhy(objs.pig,pigBody,0.1)//=====加物理外形
world.add(pigBody),meshes.push(objs.pig),bodies.push(pigBody),objs.pig.userData.body=pigBody,(//console.log("======",pigGroup.userData.body)
//=====链接猪和起始点(pigBody+rootPointBody)
// body_rootConstraint = new CANNON.PointToPointConstraint(pigBody, new CANNON.Vec3(0,130,0), rootPointBody, new CANNON.Vec3(0,0,0),100000);
// world.addConstraint(body_rootConstraint);
//console.log(pigBody,rootPointBody)
spring=new CANNON.Spring(pigBody,rootPointBody,{localAnchorA:new CANNON.Vec3(0,2,0),localAnchorB:new CANNON.Vec3(0,0,0),restLength:1,stiffness:110,damping:.1})).applyForce(),world.addEventListener("postStep",function(e){isRunningSpring&&spring.applyForce()}),groundShape=new CANNON.Plane,(//====地面
groundBody=new CANNON.Body({mass:0,shape:groundShape})).quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2),groundBody.position.set(0,-20,0),world.add(groundBody)}var ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Container,Graphics,IsPC,NumberToChinese,ParticleContainer,SOUND,SectionToChinese,Spr,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,UGC,VENDORS,_CDN,_cache,_public,_runTime,_second,_startCache,_testTime,apiLink,apiUrl,autoDetectRenderer,chnNumChar,chnUnitChar,chnUnitSection,css3Prefix,getId,getTe,i,imageurl,init,isAndroid,j,len1,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,random,resource,resources,sended,sys,thudIndex,tryThis,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len1=VENDORS.length;j<len1&&!((css3Prefix=i=VENDORS[j])+"Transition"in mTestElement.style);j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,n,o;o=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+o,(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,n)},IsPC=function e(){var t,n,o,i;for(o=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),n=!0,i=0;i<t.length;){if(0<o.indexOf(t[i])){n=!1;break}i++}return n},isAndroid=-1<navigator.userAgent.indexOf("Android")||-1<navigator.userAgent.indexOf("Adr"),//android终端
Vue.directive("resetInput",{inserted:function e(t){isAndroid||t.addEventListener("blur",function(){var e;(e=document.getElementById("reset-input"))||((e=document.createElement("INPUT")).type="text",e.style.height="0px",e.style.width="0px",e.style.position="absolute",e.id="reset-input",document.body.prepend(e)),e.focus(),e.blur()})}}),// @codekit-prepend "../../libs/vue/vue-resetinput"
Vue.component("form-grounp",{template:'<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input v-reset-input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <input v-reset-input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'number\'" v-model="item.value" type="number"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :disabled="!item" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :disabled="item.disabled" :value="item.val">{{item.name}}</option> </select> </div> </div> <slot></slot> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',data:function e(){return{submiting:!1,type:{input:"input",number:"number",select:"select",checkbox:"checkbox"}}},props:{form:{default:{}}},watch:{form:{handler:function e(t){return console.log("form:",t)},deep:!0}},methods:{getOptionsName:function e(t){var n,o,i,a;if(t.array){for(o=0,i=(a=t.options).length;o<i;o++)if((n=a[o]).val===t.value)return n.name;return t.options[0].name}return""===t.value?Object.keys(t.options)[0]:t.value},submit:function e(t){var n,o,i,a;for(o in n={},console.log("first Time.."),i=this.form)a=i[o],n[o]=a.value;// console.log "submit:",data
return this.$emit("submit",n)}},mounted:function e(t){var n,o,a,r,s;// console.log "el:",this,this.form
for(n in a=[],o=(r=this).form)"select"===(s=o[n]).type&&(console.log("form.".concat(n,".options")),this.$watch("form.".concat(n,".options"),function(e){return console.log("changed:",e)},{deep:!0})),null!=s.link&&"select"===s.type?a.push(this.$watch("form.".concat(n),function(e,t){var n,o,a;if(null==r.form[e.link])return!1;if(r.form[e.link].options=e.options[e.value],r.form[e.link].array)return console.log(e.link,r.form[e.link].value,e.options[e.value][0].val),r.form[e.link].value=e.options[e.value][0].val;for(a=[],i=n=0,o=Object.keys(e.options[e.value]).length;0<=o?n<o:o<n;i=0<=o?++n:--n){if(e.options[e.value][Object.keys(e.options[e.value])[i]]){r.form[e.link].value=Object.keys(e.options[e.value])[i];break}a.push(void 0)}return a},{deep:!0})):a.push(void 0);return a}}),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{fill:{default:"black"},name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
String.prototype.gblen=function(){var e,t,n;for(i=e=t=0,n=this.length;0<=n?e<n:n<e;i=0<=n?++e:--e)127<this.charCodeAt(i)||94===this.charCodeAt(i)?t+=2:t++;return t},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,n){return loader.resources[n].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),random=1+parseInt(5*Math.random()),UGC=function(){
// imageList = []
var e=
/* */
function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:750,h:1314,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151,callback:function e(){}},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0}),null!=this.opts.class&&""!==this.opts.class&&(
// forceCanvas: false
this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),// console.log "imageList:",imageList.length
PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(t,[{key:"loaditem",value:function e(){// console.log "load:",@.loadNumber,loading.progressOn,@.loadNumber is imageList.length
if(this.loadNumber++,loading.progressOn=parseInt(this.loadNumber/imageList.length*100),this.loadNumber===imageList.length)return buildUGC.bind(this).call(),this.opts.callback()}// @.init()
// console.log "aa"
// @.stage.addChild Spr(_CDN+"img/texture.jpg")
},{key:"build",value:function e(){return console.log("builded"),buildUGC.bind(this).call(),this.opts.callback()}}]),t}();return e.prototype.builded=!1,e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype.dom={},e.prototype._progress=0,e.prototype.lineMoving=!1,e.prototype.startTime=null,e.prototype.loadNumber=0,e}.call(void 0),// @.init()
_CDN=".",thudIndex=0,(SOUND={}).runRandomHit=function(){return SOUND["hit".concat(thudIndex+1)].play(),thudIndex=(thudIndex+1)%4},SOUND.hit1=new Howl({src:["".concat(_CDN,"/mp3/pig-1.mp3")]}),SOUND.hit2=new Howl({src:["".concat(_CDN,"/mp3/pig-2.mp3")]}),SOUND.hit3=new Howl({src:["".concat(_CDN,"/mp3/pig-3.mp3")]}),SOUND.hit4=new Howl({src:["".concat(_CDN,"/mp3/pig-4.mp3")]}),SOUND.gift=new Howl({src:["".concat(_CDN,"/mp3/gift.mp3")]}),SOUND.giftEnd=new Howl({src:["".concat(_CDN,"/mp3/han.mp3")],volume:.3}),SOUND.end=function(){return SOUND.giftEnd.play()},// setTimeout ->
// 	SOUND.bgm.play()
// ,500
loadWechatConfig=function e(){var t,n,o;o=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+o,(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,n)},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{fill:{default:"black"},name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
loadWechatConfig=function e(){var t,n,o;o=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+o,(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,n)},IsPC=function e(){var t,n,o,i;for(o=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),n=!0,i=0;i<t.length;){if(0<o.indexOf(t[i])){n=!1;break}i++}return n},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{fill:{default:"black"},name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
IsPC=function e(){var t,n,o,i;for(o=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),n=!0,i=0;i<t.length;){if(0<o.indexOf(t[i])){n=!1;break}i++}return n},loadWechatConfig=function e(){var t,n,o;o=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+o,(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,n)},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{fill:{default:"black"},name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
IsPC=function e(){var t,n,o,i;for(o=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),n=!0,i=0;i<t.length;){if(0<o.indexOf(t[i])){n=!1;break}i++}return n},// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/vue/vue-register"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "../../libs/coffee/String"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "UGC"
// @codekit-prepend "sound"
axios.defaults.withCredentials=!0,TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/YearOfThePig",// apiLink = "//localhost:3000/"
apiLink="//g.giccoo.com/",// apiLink = "http://192.168.3.53:3000/"
// apiUrl = "http://localhost:8881/Levi"
main={},sys="",sended=[!(loading={}),!(_public={})],_runTime=_startCache=_cache=ugcCache=musicIconCache=musicLineCache=ugc=null,_testTime=_second=0,neteaseShareImage=function e(){var t,n,o;return o="画山成岳",t="https://image.giccoo.com/upload/".concat(main.folder,"/")+main.shareImageLink+"@!large",n="https://activity.music.163.com/YearOfThePig/",// console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
// window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
console.log("share href:",t),CloudMusic.sharePic({picUrl:t,text:o,link:n})},window.onload=function(){var e,t;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,e=0,-1<window.navigator.userAgent.indexOf("NeteaseMusic")?(sys="NeteaseMusic",t={name:"YearOfThePig",title:"Title",subTitle:"Description",text:"",picUrl:"http://m.giccoo.com/YearOfThePig/img/ico.jpg",link:"http://m.giccoo.com/YearOfThePig/"},CloudMusic.setShareData(t)):(loadWechatConfig(),wx.ready(function(){var e;return e={title:"Title",desc:"Description",link:"http://m.giccoo.com/YearOfThePig/",imgUrl:"http://m.giccoo.com/YearOfThePig/img/ico.jpg",success:function e(){},
// alert "success"
cancel:function e(){}},// alert "cancel"
wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),// _public = new Vue
// 	el: "#public"
// 	data:
// 		note: true
// 		playing: false
// 	mounted: ->
// 		document.addEventListener "WeixinJSBridgeReady", ->
// 			_public.$children[0].change()
loading=new Vue({el:"#loading",data:{progress:0,mounted:!1,progressOn:10,isrun:!1},computed:{progressText:function e(){return NumberToChinese(this.progress)}},methods:{updateMax:function e(t){return this.progressOn=100*Math.floor(t/6)},runHand:function e(){var t=this,n,o,i,a,r,s,l;return!this.isrun&&(r=document.documentElement.clientHeight,this.isrun=!0,i=document.getElementsByClassName("hand-left")[0],a=document.getElementsByClassName("hand-right")[0],n=document.getElementsByClassName("lucky-bag")[0],s=document.getElementsByClassName("bag-shadow")[0],o=1.2,l=.5,TweenMax.to(a,o,{y:r/2-.1*r}),TweenMax.to(i,o,{y:r/2-.1*r}),TweenMax.to(a,o,{rotation:10}),TweenMax.to(i,o,{rotation:-10}),TweenMax.to(a,.5,{y:.1*-r,delay:1.5*o}),TweenMax.to(i,.5,{y:.1*-r,delay:1.5*o}),TweenMax.to(s,1/3,{scale:0,delay:1.5*o}),TweenMax.to(n,.5,{y:-r/2,delay:1.5*o,onComplete:function e(){return t.next()}}))},next:function e(){return document.getElementById("load").className+=" fadeOut animated",_public.note=!1,main.mounted=!0,setTimeout(function(){return document.getElementById("load").style.display="none",main.pageIndex=1,setTimeout(function(){return main.runHand()},520)},520)}},mounted:function e(){var t=this,n;// @.next() # for test
return this.mounted=!0,TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,n=setInterval(function(){if(t.progress+=3,t.progress>=t.progressOn&&(t.progress=t.progressOn),70<=t.progress&&t.runHand(),100<=t.progress)return t.progress=100,clearInterval(n)},50)}}),init()},init=function e(){var t,n,o;return 640<=TrueW&&(TrueW=640),1138<=TrueH&&(TrueH=1138),o=2*TrueH<1200,n=Math.ceil(TrueW/640*94/TrueH*100),TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,console.log(TrueW,TrueH),main=new Vue({el:"#main",data:(t={w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:o,afterH:o?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!0,loading:!1,playing:!1,noteText:"",noteTime:null,noteShow:!1,noteType:!0,pageInfoShow:!1,pageIndex:0,step:1,singerIndex:1,bgmPlay:!1,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcsave:null,ugcold:null,pushed:!1,shareImageLink:null,cache:null,audioId:null,v:null,recordStarting:!1,authorization:!1,norecord:!0,uploaded:!1,imageUpdate:!1,allowPopShow:!1,count:0,videoIndex:0,videoIndexOld:0,lr:!0,form:{sex:{id:"sex",type:"select",link:"city",array:!0,value:0,options:[{name:"请选择称谓(男士/女士)",val:0},{name:"男士",val:1},{name:"女士",val:2}]},firstname:{id:"firstname",type:"input",placeholder:"请填写姓",value:""},username:{id:"username",type:"input",placeholder:"请填写名",value:""},mobile:{id:"mobile",type:"number",placeholder:"请填写电话号码",value:""}},
// 	city: {id:"city", type: "select", label: "城市", link: "dealer",value: Object.keys(_citys["请选择省份"])[0], options: _citys["请选择省份"] }
mask:1,text:"",nickname:"",mobile:"",musicLink:"",logId:"",openBtnShow:!0,default:{x:0},videoPop:!1,canUpload:!0,handCover:!1,last_update:0,lastX:0,lastY:0,lastZ:0,speed:4e3,maxSpeed:0,swing:!1,messageShow:!1,registerShow:!1,lotteryShow:!1,lotteryEndShow:!1,lotteryInfo:{id:null,random:null},regSubmited:!1,giveUp:!1,gameEnd:!1,noreg:!1,ugcShow:!1,regH:100,ugcType:1},_defineProperty(t,"nickname",""),_defineProperty(t,"message",""),_defineProperty(t,"messageIndex",1),_defineProperty(t,"messageInput",!1),_defineProperty(t,"musicName",""),_defineProperty(t,"white",!1),_defineProperty(t,"formShow",!0),_defineProperty(t,"formBoxShow",!1),_defineProperty(t,"msgIndex",1),_defineProperty(t,"allow",!0),_defineProperty(t,"shaked",!1),t),methods:{runHand:function e(){var t=this,n,o,i,a;return!!this.allow&&(n=document.getElementsByClassName("home-handbag")[0],o=.5<Math.random(),n.className="home-handbag ".concat(o?"right":"left"),a=2+Math.floor(8*Math.random()),i=1,TweenMax.set(n,{y:Math.random()*TrueH*.3}),TweenMax.to(n,1,{x:o?-TrueW/3:TrueW/3}),TweenMax.to(n,.2,{yoyo:!0,rotation:5,repeat:a,transformOrigin:o?"right bottom":"left bottom",delay:1,onComplete:function e(){return TweenMax.to(n,.5,{rotation:0}),TweenMax.to(n,.5,{x:0,onComplete:function e(){return setTimeout(function(){return t.runHand()},200+1e3*Math.random())}})}}))},send:function e(t,n){var o=this,i=!(1<arguments.length&&void 0!==n)||n;return this.noteShow=!0,this.noteText=t,this.noteType=i,clearTimeout(this.noteTime),this.noteTime=setTimeout(function(){return o.noteShow=!1},2e3)},over:function e(){return this.questionShow=!1,ugc.init()},regame:function e(){return window.location.reload()},dateText:function e(t){var n;return console.log(t.replace(/-/g,"/")),(n=new Date(t.replace(/-/g,"/"))).getFullYear()+"年"+(n.getMonth()+1)+"月"+n.getDate()+"日"},goUGC:function e(){return this.lotteryShow=!0},sharePost:function e(t){// @.ugc = ugc.app.view.toDataURL()
return ugc.app.renderer.render(ugc.app.stage),this.ugc=t},restart:function e(){return window.location.reload()},goshare:function e(){
// goShare()
return this.share()},share:function e(){return goFinal2(),this.formBoxShow=!1,this.registerShow=!1,this.lotteryShow=!1,console.log("run share"),// ugc.qrcode.visible = true
ugc.app.renderer.render(ugc.app.stage),this.ugc=ugc.app.view.toDataURL(),ugc.buildUGC(ugc.app.view.toDataURL())},callShare:function e(t){var n,o,i;return null!=t&&(this.ugc=t),i=this.ugc,this.wy?(n={image:i,folder:o="drawboard"},this.folder=o,null==i?this.faild():!this.pushed&&(null!=this.shareImageLink?(this.pushed=!1,this.loading=!1,// ugc.back()
neteaseShareImage(),"undefined"!=typeof shareDone&&null!==shareDone&&shareDone(),!0):axios.post(imageurl,n).then(function(e){return 200===e.data.code?main.success(e.data):main.faild(e)}).catch(function(e){
// alert e
return main.faild(e)}))):this.ugcShow=!0},
// ugc.back()
// ugc.qrcode.visible = false
success:function e(t){return this.shareImageLink=t.info,this.pushed=!1,this.loading=!1,// ugc.back()
neteaseShareImage(),shareDone()},
// 抽奖
// unless @.giveUp
// 	setTimeout =>
// 		@.getLottery()
// 	,5000
closeUGC:function e(){return this.ugcShow=!1,shareDone()},faild:function e(t){return this.pushed=!1,this.loading=!1},openSong:function e(){var t;// CloudMusic.song(id[resultNum])
return t=[169794,166317,112678,144143,64497,163639,28853351,153476,5271858,186980,170749,5276250,27591641,32922491,144380,5250828,28785688,186272,210866,555984413],window.location.href="https://music.163.com/#/song?id=".concat(t[resultNum])},openInApp:function e(){return CloudMusic.open("https://m.giccoo.com/draw-board/")},goNext:function e(){var t=this;return setTest(),ModLoaded(),this.pageIndex=2,setTimeout(function(){return t.runShakeHand()},1e3)},runShakeHand:function e(){var t=this,n,o,i;return!this.shaked&&(n=.3,i=14,(o=document.getElementById("shakeHand")).className="hand hold",TweenMax.to(o,.3,{x:10,rotation:13,transformOrigin:"center bottom"}),TweenMax.to(o,.6,{x:-10,rotation:-13,transformOrigin:"center bottom",delay:.3}),TweenMax.to(o,.6,{x:10,rotation:13,transformOrigin:"center bottom",delay:.3*3}),TweenMax.to(o,.15,{x:-10,rotation:-13,yoyo:!0,repeat:14,transformOrigin:"center bottom",delay:1.5}),TweenMax.to(o,.15,{x:0,rotation:0,transformOrigin:"center bottom",delay:3.6,onComplete:function e(){return o.className="hand",setTimeout(function(){return t.runShakeHand()},1e3)}}))},runGift:function e(){var t;return this.messageShow=!0,t=["有对象吗?","结婚了吗?","朋友们都结婚了吧?","年终奖多少啊?","买房了吗?","你看你又胖啦!","这么大岁数了要努力呀!"],// @.message = msgs[Math.floor(Math.random() * msgs.length)]
document.getElementById("subtitles").innerHTML="<div data-splitting>".concat(t[this.msgIndex],"</div>"),Splitting(),this.msgIndex=(this.msgIndex+1)%t.length,SOUND.runRandomHit()},gameOver:function e(){return console.log("Start"),this.gameEnd=!0}},mounted:function e(){var t,n;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,"NeteaseMusic"===sys&&(this.wy=!0),t=2*TrueH*(2-2*TrueW/750+.01),this.wy=CloudMusic.isInApp(),n=CloudMusic.getClientVersion().split("."),ugc=new UGC({el:"ugc",w:750,h:750/TrueW*TrueH,callback:function e(){}}),document.getElementById("sence").appendChild(initAll())}})},chnNumChar=["零","一","二","三","四","五","六","七","八","九"],chnUnitSection=["","万","亿","万亿","亿亿"],chnUnitChar=["","十","百","千"],SectionToChinese=function e(t){var n,o,i,a,r,s;for(n=i="",o=t,s=!(a=0);0<t;)0===(r=t%10)?s||(s=!0,n=chnNumChar[r]+n):(s=!1,i=chnNumChar[r],n=(i+=chnUnitChar[a])+n),a++,t=Math.floor(t/10);return 10<=o&&o<20?n.substr(1):n},NumberToChinese=function e(t){var n,o,i,a,r;if(n=a="",o=!1,(r=0)===t)return chnNumChar[0];for(;0<t;)i=t%1e4,o&&(n=chnNumChar[0]+n),a=SectionToChinese(i),n=(a+=0!==i?chnUnitSection[r]:chnUnitSection[0])+n,o=i<1e3&&0<i,t=Math.floor(t/1e4),r++;return n},tryThis=function e(t){return console.log("msg:",t)},Fog.prototype.isFog=!0,Fog.prototype.clone=function(){return new Fog(this.color,this.near,this.far)},Fog.prototype.toJSON=function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};var gifts=[],giftsNum=[1,3,5,7,9,16,20,50],gift1,gift2,gift3,gift4,nowGiftType=parseInt(4*Math.random()),giftScale=1,pigScale=.1,footLinearDamping=.2,handLinearDamping=.2,footAngularDamping=.2,handAngularDamping=.2,leftFoot,leftFootBody,leftFootJointBody,leftLegGeo,leftLegMat,leftLeg,rightFoot,rightFootBody,rightFootJointBody,rightLegGeo,rightLegMat,rightLeg,rightHand,rightHandBody,rightHandJointBody,rightArmGeo,rightArmMat,rightArm,leftHand,leftHandBody,leftHandJointBody,leftArmGeo,leftArmMat,leftArm,hanger,headLine,headLineGeo,headLineMat,line=new Float32Array,lines=[],lineMesh,scene=new THREE.Scene,camera=new THREE.OrthographicCamera(window.innerWidth/window.innerHeight*80/-2,window.innerWidth/window.innerHeight*80/2,40,-40,.1,200),renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!1}),modNum=0,modLoadedNum=0,objs={},stats=null,world=new CANNON.World,rootPoint,rootPointBody,pigShape,pigBody,ifFirsTime=!0,cannonDebugRenderer=new THREE.CannonDebugRenderer(scene,world),meshes=[],bodies=[],controls,guiControls,datGUI,raycaster=new THREE.Raycaster,mouse=new THREE.Vector2,intersects=[],mouseConstraint=void 0,lastX,lastY,lastDirX,lastDirY,entropy=0,MIN_DISTANCE_PER_SHAKE=20,ENTROPY_PER_SHAKE=1,MAX_ENTROPY=[1,2,3,4,6,8,16,16],level=0,ifFirsTime2=!0,eyeGroup=new THREE.Group,eye1,eye2,eye3,eye4,pickingPlane,spring,isRunningSpring=1,jointBody,groundShape,groundBody,leftFootJoint,leftFootShap,leftFootCurve,rightFootJoint,rightFootShap,rightFootCurve,rightHandJoint,rightHandShap,rightHandCurve,leftHandJoint,leftHandShap,leftHandCurve,_CDN,imageList=[(_CDN="./")+"img/pig-hand-last.png"],buildUGC=function e(){console.log("app",this,this.opts.w,this.opts.h),this.stage.addChild(new Spr(_CDN+"img/pig-hand-last.png"))};
//# sourceMappingURL=main.js.map