precision highp float;

varying vec3 v_viewSpacePosition;
varying vec3 v_viewSpaceNormal;
varying float v_speed;

void main () {
    // gl_FragColor = vec4(v_viewSpaceNormal.x, v_viewSpaceNormal.y, v_speed, v_viewSpacePosition.z);
    gl_FragColor = vec4(v_speed * 0.8, v_viewSpaceNormal.y * 0.3, v_speed * 0.1, v_viewSpacePosition.z);
}
