const db = require('../database')

const GetAllAssets = async (page)=>{
    // Get all assets with name, amount, owner, date
    const offset = (page-1)*10;
    console.log(offset);

    const results = await db.SingleQuery(`SELECT a.a_id, a.o_id, a.description, a.weight_g,
                    u.name, u.phone, u.address, t.type,
                    l.loan_id, l.loan_amount, l.date, l.close_date
                    FROM assets a INNER JOIN userdata u ON a.o_id=u.id 
                    INNER JOIN asset_type t ON a.type=t.id 
                    INNER JOIN loan_details l ON l.a_id=a.a_id LIMIT $1 OFFSET $2;`,[10,offset])    
    return results.rows
}

const GetAssetsOfUser = async (username)=>{
    // Get all assets of a user with username
    const results = await db.SingleQuery(`SELECT a.a_id, a.o_id, a.description, a.weight_g,
                    u.name, u.phone, u.address, t.type,
                    l.loan_id, l.loan_amount, l.date, l.close_date
                    FROM assets a INNER JOIN userdata u ON a.o_id=u.id and a.o_id=$1
                    INNER JOIN asset_type t ON a.type=t.id 
                    INNER JOIN loan_details l ON l.a_id=a.a_id`,[username])    
    return results.rows
}

const GetAssetsByPhone = async (phone)=>{
    // Get all assets of a user with phoneumber
    const results = await db.SingleQuery(`SELECT a.a_id, a.o_id, a.description, a.weight_g,
                    u.name, u.phone, u.address, t.type,
                    l.loan_id, l.loan_amount, l.date, l.close_date
                    FROM assets a INNER JOIN userdata u ON a.o_id=u.id and u.phone=$1
                    INNER JOIN asset_type t ON a.type=t.id 
                    INNER JOIN loan_details l ON l.a_id=a.a_id`,[phone])    
    return results.rows
}

const GetAssetsByDate = async (date)=>{
    // Get all assets on a specific date
    const results = await db.SingleQuery(`SELECT a.a_id, a.o_id, a.description, a.weight_g,
                    u.name, u.phone, u.address, t.type,
                    l.loan_id, l.loan_amount, l.date, l.close_date
                    FROM assets a INNER JOIN userdata u ON a.o_id=u.id and l.date=$1
                    INNER JOIN asset_type t ON a.type=t.id 
                    INNER JOIN loan_details l ON l.a_id=a.a_id`,[date])    
    return results.rows
}

const GetAssetsByDateRange = async (phone)=>{
    // Get all assets in a specific date range
}

const GetAssetsByName = async (name)=>{
    // Get all assets of a user with name
    const results = await db.SingleQuery(`SELECT a.a_id, a.o_id, a.description, a.weight_g,
                    u.name, u.phone, u.address, t.type,
                    l.loan_id, l.loan_amount, l.date, l.close_date
                    FROM assets a INNER JOIN userdata u ON a.o_id=u.id and u.name=$1
                    INNER JOIN asset_type t ON a.type=t.id 
                    INNER JOIN loan_details l ON l.a_id=a.a_id`,[name])    
    return results.rows
}

const GetAssetsByLoan = async (loan_id)=>{
    // Get all assets on a specific date
    const results = await db.SingleQuery(`SELECT a.a_id, a.o_id, a.description, a.weight_g,
                    t.type,lnd.loan_id, lnd.loan_amount, lnd.date, lnd.close_date
                    FROM loan_details lnd INNER JOIN assets a ON a.a_id = lnd.a_id and lnd.loan_id=$1                    
                    INNER JOIN asset_type t ON a.type=t.id`,[loan_id])    
    return results.rows
}

const GetAssetDetails = async (asset_id)=>{
    // Get details about an asset
    const results = await db.SingleQuery(`SELECT a.a_id, a.o_id, a.description, a.weight_g,
                    u.name, u.phone, u.address, t.type,
                    l.loan_id, l.loan_amount, l.date, l.close_date
                    FROM assets a INNER JOIN userdata u ON a.o_id=u.id and a.a_id=$1
                    INNER JOIN asset_type t ON a.type=t.id 
                    INNER JOIN loan_details l ON l.a_id=a.a_id`,[asset_id])    
    return results.rows
}


const GetAllInterest = async (loan_id)=>{
    // Get all interest of loan paid by the user
    
    const results = await db.SingleQuery(`SELECT * 
                    FROM interest_paid ip WHERE ip.l_id=$1`,[loan_id])    
    return results.rows
}

module.exports={GetAssetsByLoan,GetAllAssets, GetAssetsOfUser, GetAssetsByPhone, GetAssetsByDate, GetAssetsByDateRange, GetAssetsByName, GetAssetDetails, GetAllInterest}