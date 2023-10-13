import { put } from "@vercel/blob";

const blobUpload = (file)=>{
    console.log(file);
    const { url } = put(`storage/${file.name}`, file, { access: 'public', token: "vercel_blob_rw_HkgyrPpNbcUJOswO_nk711QQcAT244dnLdChHJnVEPvkMAg"});

    console.log(url)

    return String(url);
}

export {blobUpload}