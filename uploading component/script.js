  var uppy = Uppy.Core()
  uppy.use(Uppy.DragDrop, { target: '.UppyDragDrop' })
  uppy.use(Uppy.Dashboard, {
    id: 'Dashboard',
  target: 'dashboard',
  metaFields: [],
  trigger: '#uppy-select-files',
  inline: false,
  width: 750,
  height: 550,
  thumbnailWidth: 280,
  showLinkToFileUploadResult: true,
  showProgressDetails: false,
  hideUploadButton: false,
  hideRetryButton: false,
  hidePauseResumeButton: false,
  hideCancelButton: false,
  hideProgressAfterFinish: false,
  note: null,
  closeModalOnClickOutside: false,
  closeAfterFinish: false,
  disableStatusBar: false,
  disableInformer: false,
  disableThumbnailGenerator: false,
  disablePageScrollWhenModalOpen: true,
  animateOpenClose: true,
  proudlyDisplayPoweredByUppy: true,
  onRequestCloseModal: () => this.closeModal(),
  showSelectedFiles: true,
  browserBackButtonClose: false
  })
  uppy.use(Uppy.Tus, { endpoint: '//master.tus.io/files/' })


  // const uppy = Uppy.Core({debug: true, autoProceed: true})
  //       .use(Uppy.DragDrop, {target: "#photolist", width: '100%', height: '100%',})
  //       .use(Uppy.XHRUpload, {endpoint: 'https://dating.eemy.net/upload?type=1', fieldName: 'file'})
  //       .use(Uppy.ProgressBar, {id: 'ProgressBar', target: "#photoconsole"});

  //     uppy.on('success', (fileCount) => {
  //       console.log(`${fileCount} files uploaded`);
  //     })


  //   uppy.on('upload-success', (file, response) => {
  //       if( response.status == 200 ){
  //           if( response.body.status ){
  //               let image = response.body.data.media_preview;
  //               let hash_id = response.body.data.hash_id;
  //               let media_status = response.body.data.media_status;
  //               let card_instance = card_html.replace('{{data-url}}', image);
  //               card_instance = card_instance.replace('{{data-id}}', hash_id);
  //               if( media_status == 0 ){
  //                   card_instance = card_instance.replace('{{data-status}}', 'pending review');
  //               }
  //               else{
  //                   card_instance = card_instance.replace('{{data-status}}', '');   
  //               }
  //               let proxyDiv = document.createElement("div");
  //               proxyDiv.innerHTML = card_instance;
  //               photo_container.appendChild(proxyDiv.querySelector(".col-lg-3"));
  //               if( media_status == 0 ){
  //                   var a = proxyDiv.querySelector('.btn-primary');
  //                   a.parentElement.removeChild(a);
  //               }
  //               if( proxyDiv.querySelector(".btn-primary") ){
  //                   proxyDiv.querySelector(".btn-primary").addEventListener("click", setPrimaryPhoto);
  //               }
  //               if( proxyDiv.querySelector(".btn-warning") ){
  //                   proxyDiv.querySelector(".btn-warning").addEventListener("click", setDeleteNotify);       
  //               }
  //           }
  //       }
  //   })