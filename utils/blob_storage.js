const blobUpload = async (file)=>{
    const { url } = await put(`articles/${file.name}`, file, { access: 'public', token: "vercel_blob_rw_HkgyrPpNbcUJOswO_nk711QQcAT244dnLdChHJnVEPvkMAg"});

    return url;
}

export {blobUpload}