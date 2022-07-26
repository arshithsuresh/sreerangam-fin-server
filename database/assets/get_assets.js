const db = require('../database')

const GetAllAssets = ()=>{
    // Get all assets with name, amount, owner, date
    const result = db.MultipleQuery("SELECT a.a_id, a.o_id, a.description, u.name, u.phone, u.address, t.type FROM assets a , userdata u , asset_type t where a.o_id=u.id and a.type=t.id LIMIT 10;")
    console.log(result)
}

const GetAssetsOfUser = (username)=>{
    // Get all assets of a user with username
}

const GetAssetsByPhone = (phone)=>{
    // Get all assets of a user with phoneumber
}

const GetAssetsByDate = (date)=>{
    // Get all assets on a specific date
}

const GetAssetsByDateRange = (phone)=>{
    // Get all assets in a specific date range
}

const GetAssetsByName = (name)=>{
    // Get all assets of a user with name
}

const GetAssetDetails = (asset_id)=>{
    // Get details about an asset
}

const GetLoanDetails = (loan_id)=>{
    // Get details of loan along with asset details
}

const GetAllInterest = (load_id)=>{
    // Get all interest of loan paid by the user
}

module.exports={GetAllAssets, GetAssetsOfUser, GetAssetsByPhone, GetAssetsByDate, GetAssetsByDateRange, GetAssetsByName, GetAssetDetails, GetLoanDetails, GetAllInterest}