<template>
  <div class="card hoverable">
    <div class="card-content">
      <div class="row">
        <div class="input-field col s12">
          <input id="title" type="text" class="validate" />
          <label for="title">Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="article" type="text" class="validate" />
          <label for="article">Article</label>
        </div>
      </div>
      <div class="file-field input-field">
        <div class="btn amber">
          <span>Photo</span>
          <input type="file" />
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" type="text" />
        </div>
      </div>
      <br />
      <div class="row center">
        <button class="btn indigo">Create</button>
      </div>
    </div>
  </div>
</template>