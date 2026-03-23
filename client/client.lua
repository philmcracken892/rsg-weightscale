local RSGCore = exports['rsg-core']:GetCoreObject()
local lastWeightData = nil

-- Convert weight based on config
local function ConvertWeight(weight)
    if Config.WeightUnit == "kg" then
        return math.floor(weight * Config.LbsToKg)
    end
    return math.floor(weight)
end

-- Setup ox_target for scale model
CreateThread(function()
    exports.ox_target:addModel(Config.ScaleModel, {
        {
            name = 'use_weightscale',
            icon = 'fas fa-weight',
            label = 'Step on Scale',
            distance = Config.InteractDistance,
            onSelect = function(data)
                TriggerServerEvent('rsg-weightscale:server:checkWeight')
            end
        }
    })
end)

-- Receive weight data from server (from scale)
RegisterNetEvent('rsg-weightscale:client:showWeight', function(weight, playerName, isSlip, dateStr)
    local convertedWeight = ConvertWeight(weight)
    
    -- Store last weight data
    lastWeightData = {
        weight = convertedWeight,
        unit = Config.WeightUnit,
        playerName = playerName,
        date = dateStr or "Unknown Date"
    }
    
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'showWeight',
        weight = convertedWeight,
        unit = Config.WeightUnit,
        playerName = playerName,
        isSlip = isSlip or false,
        date = lastWeightData.date
    })
end)

-- Show weight slip (from item use)
RegisterNetEvent('rsg-weightscale:client:showWeightSlip', function(slipData)
    if not slipData then
        RSGCore.Functions.Notify("This weight slip is blank!", "error")
        return
    end
    
    local convertedWeight = ConvertWeight(slipData.weight)
    
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'showWeight',
        weight = convertedWeight,
        unit = slipData.unit or Config.WeightUnit,
        playerName = slipData.playerName,
        isSlip = true,
        date = slipData.date or "Unknown Date"
    })
end)

-- Close UI callback
RegisterNUICallback('closeUI', function(data, cb)
    SetNuiFocus(false, false)
    cb('ok')
end)