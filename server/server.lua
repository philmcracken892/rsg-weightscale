local RSGCore = exports['rsg-core']:GetCoreObject()

-- Store player weight slip data
local playerWeightSlips = {}

-- Handle weight check from scale
RegisterNetEvent('rsg-weightscale:server:checkWeight', function()
    local src = source
    local Player = RSGCore.Functions.GetPlayer(src)
    
    if not Player then return end
    
    local playerName = Player.PlayerData.charinfo.firstname .. ' ' .. Player.PlayerData.charinfo.lastname
    local dateStr = os.date("%B %d, 1899")
    
    -- Random weight every time (80-250 lbs)
    local weight = math.random(80, 250)
    
    -- Store weight slip data for this player
    local visaId = Player.PlayerData.citizenid
    playerWeightSlips[visaId] = {
        weight = weight,
        unit = Config.WeightUnit,
        playerName = playerName,
        date = dateStr
    }
    
    -- Give weight slip item if enabled
    if Config.GiveWeightSlip then
        -- Check if player already has a weight slip
        local hasSlip = Player.Functions.GetItemByName(Config.WeightSlipItem)
        if hasSlip then
            -- Remove old slip
            Player.Functions.RemoveItem(Config.WeightSlipItem, 1)
        end
        
        -- Add new weight slip with metadata
        Player.Functions.AddItem(Config.WeightSlipItem, 1, false, playerWeightSlips[visaId])
        TriggerClientEvent('inventory:client:ItemBox', src, RSGCore.Shared.Items[Config.WeightSlipItem], "add")
    end
    
    -- Show weight to player
    TriggerClientEvent('rsg-weightscale:client:showWeight', src, weight, playerName, false, dateStr)
end)

-- Use weight slip item
RSGCore.Functions.CreateUseableItem(Config.WeightSlipItem, function(source, item)
    local src = source
    local Player = RSGCore.Functions.GetPlayer(src)
    
    if not Player then return end
    
    -- Get slip data from item metadata
    local slipData = item.info
    
    if slipData and slipData.weight then
        TriggerClientEvent('rsg-weightscale:client:showWeightSlip', src, slipData)
    else
        -- Fallback to stored data
        local visaId = Player.PlayerData.citizenid
        if playerWeightSlips[visaId] then
            TriggerClientEvent('rsg-weightscale:client:showWeightSlip', src, playerWeightSlips[visaId])
        else
            TriggerClientEvent('RSGCore:Notify', src, "This weight slip is blank!", "error")
        end
    end
end)

-- Admin command to set player weight
RSGCore.Commands.Add('setweight', 'Set player weight', {
    {name = 'id', help = 'Player ID'}, 
    {name = 'weight', help = 'Weight'}
}, true, function(source, args)
    local targetId = tonumber(args[1])
    local weight = tonumber(args[2])
    
    if not targetId or not weight then return end
    
    local Player = RSGCore.Functions.GetPlayer(targetId)
    if Player then
        Player.Functions.SetMetaData('weight', weight)
        TriggerClientEvent('RSGCore:Notify', source, 'Weight set to ' .. weight, 'success')
    end
end, 'admin')