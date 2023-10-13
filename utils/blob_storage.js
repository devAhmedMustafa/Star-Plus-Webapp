import { put } from "@vercel/blob";

const blobUpload = async (file)=>{
    console.log(file);
    const { url } = await put(`storage/${file.name}`, file, { access: 'public', token: "vercel_blob_rw_HkgyrPpNbcUJOswO_nk711QQcAT244dnLdChHJnVEPvkMAg"});

    console.log(url)

    return String(url);
}

export {blobUpload}