
function setMeshPhy(_mesh,_body,_scale){
	//console.log(_mesh.geometry.attributes)
		if(!_scale){_scale=1}

		var rawVerts = _mesh.geometry.attributes.position.array;
    var verts=[]
    var j
    for (j=0; j < _mesh.geometry.attributes.position.array.length; j+=3) {
    	verts.push(new CANNON.Vec3(	rawVerts[j]*_scale	,	rawVerts[j+1]*_scale	,	rawVerts[j+2]*_scale));
    };

    //var _meshShape = new CANNON.ConvexPolyhedron(verts);
    var _faces=new THREE.Geometry()
    _faces.fromBufferGeometry(_mesh.geometry)
    var _meshShape = new CANNON.ConvexPolyhedron(verts,_faces.face);
	 _body.addShape(_meshShape)

}

function vec3toVector3(_vec3){
	var _vector3=new THREE.Vector3(_vec3.x,_vec3.y,_vec3.z)
	return(_vector3)
}