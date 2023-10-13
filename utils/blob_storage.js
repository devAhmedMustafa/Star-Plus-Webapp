import { put } from "@vercel/blob";

const blobUpload = async (file)=>{
    console.log(file);
    const res = await put(`storage/${file.name}`, file, { access: 'public', token: "vercel_blob_rw_HkgyrPpNbcUJOswO_nk711QQcAT244dnLdChHJnVEPvkMAg"});

    return res;
}

export {blobUpload}